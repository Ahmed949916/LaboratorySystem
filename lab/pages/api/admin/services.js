import { requireAdmin } from "@/lib/auth";
import db from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const dbo = await db();

  let lab;
  try {
    lab = await requireAdmin(req);
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const labId = lab.labId;

  if (req.method === "GET") {
    try {
      const reports = await dbo.collection("services").find({ labId }).toArray();
      return res.status(200).json({ reports });
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch reports" });
    }
  }
    if (req.method === "DELETE") {
     
    const { serviceId } = req.query;
  if (!serviceId) {
    return res.status(400).json({ error: "Missing serviceId" });
  }
 
    try {
   
      const result = await dbo
        .collection("services")
        .deleteOne({ _id: new ObjectId(serviceId), labId });
      console.log("results",result)
      return res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete service" });
    }
  }

  if (req.method === "POST") {
    const service = req.body.service;
   

    if (!service || !service.testName || !service.price) {
      return res.status(400).json({ error: "Missing service or currentLab data" });
    }

    try {
      await dbo.collection("services").insertOne({
        labId,
        testName: service.testName,
        price: service.price.toString(),
        description: service.description,
      });

      return res.status(201).json({ message: "Service added successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to add service" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

