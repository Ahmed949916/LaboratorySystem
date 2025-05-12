import db from "@/lib/mongodb"; 
import { requireUser } from "@/lib/auth";
export default async (req,res)=>{
  try{ await requireUser(req);}catch{return err(res,401,"Auth");}
  const id = req.query.id;
  const doc = await (await db()).collection("reports")
              .findOne({ _id: new ObjectId(id) });
  if(!doc) return err(res,404,"nf");
  res.setHeader("Content-Type", doc.mimeType);
  res.setHeader("Content-Disposition",`inline; filename="${doc.testName}.pdf"`);
  res.send(doc.pdf.buffer);          
}
