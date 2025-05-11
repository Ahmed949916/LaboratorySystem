import db from "../../../lib/mongodb";
import { requireAdmin } from "../../../lib/auth";
import formidable from "formidable";          // npm i formidable
import { readFile } from "fs/promises";

export const config = { api: { bodyParser: false } }; // let formidable handle

export default async function handler(req, res) {
  let lab;
  try { lab = await requireAdmin(req); } catch { return err(res,401,"Auth"); }
  if (req.method !== "POST") return res.status(405).end();

  const form = formidable({ maxFileSize: 16 * 1024 * 1024 }); // 16 MB
  form.parse(req, async (errF, fields, files) => {
    if (errF) return err(res,400,errF.message);
    const { phone, label, visitDate, testName } = fields;
    const file = files.file;
    if (!phone || !label || !file) return err(res,400,"missing");

    const dbo   = await db();
    const user  = await dbo.collection("users").findOne({ phone })
               || await dbo.collection("users").insertOne({ phone }).then(r=>({ _id:r.insertedId, phone }));

    const relation = await dbo.collection("relations").findOne(
      { labId: lab.labId, userId: user._id, label }
    ) || await dbo.collection("relations").insertOne({
          labId: lab.labId, userId: user._id, label,
          createdAt: new Date()
        }).then(r => ({ _id: r.insertedId }));

    const visit = new Date(visitDate || Date.now());
    const caseDoc = await dbo.collection("cases").findOne(
      { labId: lab.labId, relationId: relation._id, visitDate: visit }
    ) || await dbo.collection("cases").insertOne({
          labId: lab.labId, relationId: relation._id, visitDate: visit,
          createdAt: new Date()
        }).then(r => ({ _id: r.insertedId }));

    const buffer = await readFile(file.filepath);   // tmp path by formidable
    await dbo.collection("reports").insertOne({
      labId: lab.labId,
      caseId: caseDoc._id,
      testName,
      pdf: buffer,
      mimeType: file.mimetype,
      uploadedBy: lab.labId,
      createdAt: new Date()
    });

    res.json({ ok:true });
  });
}
