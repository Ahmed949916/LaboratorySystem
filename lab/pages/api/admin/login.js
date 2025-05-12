//  import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       console.log(req.body);
//       const { admin } = req.body;
      
//       if (!admin || !admin.phone || !admin.password) {
//         return res.status(400).json({ error: "Phone and password required" });
//       }
//     const client = await MongoClient.connect(process.env.MONGO_URI)
      
//       const db = client.db();
//       const adminUser = await db.collection("admin").findOne({ 
//         phone: admin.phone,
//         password: admin.password 
//       });
      
//       await client.close();
      
//       if (!adminUser) {
//         return res.status(401).json({ error: "Invalid credentials" });
//       }
      
//       return res.status(200).json({ 
//         message: 'Login successful',
//         admin: {
//           phone: adminUser.phone
//         }
//       });
      
//     } catch (error) {
//       console.error("Login error:", error);
//       return res.status(500).json({ error: "Server error" });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login