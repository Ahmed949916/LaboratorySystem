import { MongoClient } from "mongodb";

export default async function handler(req, res) {
 
  if (req.method === "GET") {
   
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const admins = await db.collection("admin").find().toArray()
    console.log(admins)
    return res.status(200).json({ admins });
  }
}
