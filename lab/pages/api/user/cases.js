import { requireUser } from "@/lib/auth";
import db from "../../../lib/mongodb";
import { MongoClient, ObjectId } from "mongodb";

export default async (req, res) => {
    // try {
    //     lab = await requireUser(req);
    //   } catch {
    //     return err(res, 401, "Unauthorized");
    //   }
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { labId, label, userId } = req.query;
  console.log("Received in API:", { labId, label, userId });

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();

  let reports = [];
  let relationId = null;

  if (label !== "self") {
    const relation = await db.collection("relations").findOne({
      userId: new ObjectId(userId),
      label: label
    });

    if (relation) {
      // Convert relationId to string if stored as string in reports
      relationId = relation._id.toString();
      console.log("Found relationId (string):", relationId);

      reports = await db.collection("reports").find({
        userId: userId, // Ensure this matches the type in the database (string or ObjectId)
        relationId: relationId
      }).toArray();
    }
  } else {
    // Handle "self" reports
    reports = await db.collection("reports").find({
      userId: userId,
      relationId: { $exists: false }
    }).toArray();
  }

  const reportsWithPdf = reports.map(report => ({
    ...report,
    pdfBase64: report.pdf?.buffer?.toString('base64') || null
  }));

  await client.close();
  return res.status(200).json(reportsWithPdf);
};