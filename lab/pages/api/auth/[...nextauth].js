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

        if (user) 
            return { 
            id: user._id.toString(), 
            phone: user.phone, 
            role: "user" 
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

        if (admin) return { id: admin._id.toString(), phone: admin.phone, role: "admin" };
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  
  secret: process.env.NEXTAUTH_SECRET,
  
});