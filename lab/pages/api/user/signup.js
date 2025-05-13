import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const { user } = req.body;
      
      if (!user) {
        return res.status(400).json({ error: "User data is missing" });
      }
      if (!user.name || !user.phone || !user.password) {
        return res.status(400).json({ error: "Name, phone and password are required" });
      }
      
      if (user.password !== user.confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
      
      // Connect to MongoDB
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();
      
      // Check if user exists
      const existingUser = await db.collection("users").findOne({ phone: user.phone });
      
      if (existingUser) {
        await client.close();
        return res.status(400).json({ error: "Phone number already registered" });
      }
      
      // Insert user
      await db.collection("users").insertOne(user);
      
      await client.close();
      
      return res.status(201).json({ 
        message: 'User registered successfully!',
        success: true
      });
      
    } catch (error) {
      console.error("Signup error:", error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}