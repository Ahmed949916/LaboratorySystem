// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { user } = req.body;

//     const client = await MongoClient.connect(process.env.MONGO_URI);
//     const db = client.db();

//     const foundUser = await db.collection("users").findOne({
//       phone: user.phone,
//       password: user.password
//     });

//     await client.close();

//     if (!foundUser) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     return res.status(200).json({
//       message: "Login successful",
//       admin: {
//         id: foundUser._id.toString(),
//         phone: foundUser.phone,
//       },
//     });
//   }
  
// }
import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login