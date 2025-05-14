import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(MongoClient.connect(process.env.MONGO_URI)),

  providers: [
    // Regular User Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await MongoClient.connect(process.env.MONGO_URI);
        const db = client.db();
        const user = await db.collection("users").findOne({
          phone: credentials.phone,
          password: credentials.password,
        });
        await client.close();
           console.log("user")
         
      

        if (user) 
            return { 
            id: user._id.toString(), 
            phone: user.phone, 
            role: "user", 
            name: user.name
        };
        return null;
      },
    }),

    CredentialsProvider({
      id: "admin-credentials",
      name: "Admin",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await MongoClient.connect(process.env.MONGO_URI);
        const db = client.db();
        const admin = await db.collection("admin").findOne({
          phone: credentials.phone,
          password: credentials.password,
        });
     
        await client.close();
        if(admin) console.log(admin)
          console.log("admin")
         

        if (admin) return { id: admin._id.toString(), phone: admin.phone, role: "admin" ,name: admin.name};
        return null;
      },
    }),
  ],

  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.role = user.role;
      token.name = user.name;
      token.phone = user.phone;
    }
    return token;
  },
  async session({ session, token }) {
    if (token) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.phone = token.phone;
    }
    return session;
  },
},


  session: { strategy: "jwt" },

  
  secret: process.env.NEXTAUTH_SECRET,
  
});