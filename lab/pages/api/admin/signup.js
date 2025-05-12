import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  
    if (req.method === "POST") {
      try {
        console.log(process.env.MONGO_URI);
        console.log(req.body)
        const { admin } = req.body;  
        const { phone, password, name, email, address, city, confirmPassword } = admin;
  
        // Basic validation
        if (!name || !email || !address || !city || !phone || !password || !confirmPassword) {
          return res.status(400).json({ error: "All fields are required" });
        }
  
        if (password !== confirmPassword) {
          return res.status(400).json({ error: "Passwords do not match" });
        }
        const client = await MongoClient.connect(process.env.MONGO_URI)
        const db=client.db();
        const existingUser = await db.collection("admin").findOne({ phone: phone });
      
        if (existingUser) {
          await client.close();
          return res.status(400).json({ error: "Phone number already registered" });
      }
        const result = await db.collection("admin").insertOne(admin)
  
        return res.status(201).json({ message: 'Admin registered successfully!' });
  
      } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }