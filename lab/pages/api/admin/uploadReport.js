import db from "../../../lib/mongodb";
import { requireAdmin } from "../../../lib/auth";
import formidable from "formidable";
import { readFile } from "fs/promises";
import { ObjectId } from "mongodb";

export const config = { api: { bodyParser: false } };

function err(res, status = 400, message = "Bad request") {
  return res.status(status).json({ error: message });
}

const parseForm = (req) => {
  const form = formidable({ maxFileSize: 16 * 1024 * 1024 });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export default async function handler(req, res) {
  let lab;
  try {
    lab = await requireAdmin(req);
  } catch {
    return err(res, 401, "Unauthorized");
  }

  if (req.method !== "POST") return res.status(405).end();

  try {
    const { fields, files } = await parseForm(req);
    const { phone, label, testName,user_id } = fields;

 
    const fileList = files.file;
    const file = Array.isArray(fileList) ? fileList[0] : fileList;

    if (!phone || !label || !testName || !file || !file.filepath) {
      return err(res, 400, "Missing required fields or file");
    }
    const dbo = await db();
    let relation = null;
 
      relation = await dbo.collection("relations").findOne({
        userId:new ObjectId(user_id[0]),
        label:label[0],
      });

      
    const buffer = await readFile(file.filepath);
    const visit = new Date();
if(relation){
  await dbo.collection("reports").insertOne({
      labId: lab.labId,
      userId:user_id[0],
      relationId: relation?._id.toString() ,
      testName:testName[0],
      pdf: buffer,
      visitDate: visit,
      mimeType: file.mimetype,
      uploadedBy: lab.labId,
      createdAt: new Date(),
    });
}else{
    await dbo.collection("reports").insertOne({
      labId: lab.labId,
      userId:user_id[0],
      
      testName:testName[0],
      pdf: buffer,
      visitDate: visit,
      mimeType: file.mimetype,
      uploadedBy: lab.labId,
      createdAt: new Date(),
    });
}
  

    return res.json({ ok: true });
  } catch (error) {
    console.error("Upload error:", error);
    return err(res, 500, "Internal server error");
  }
}
