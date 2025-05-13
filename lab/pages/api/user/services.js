import { requireUser } from "@/lib/auth";
import db from "../../../lib/mongodb";

export default async function handler(req, res) {
  const dbo = await db();
 

 const { labId } = req.query;
 console.log(labId)
 

  if (req.method === "GET") {
    try {
      const reports = await dbo.collection("services").find({ labId }).toArray();
      return res.status(200).json({ reports });
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch reports" });
    }
  }
}