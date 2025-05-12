import db from "../../../lib/mongodb";
import { requireUser } from "../../../lib/auth";
export default async (req,res)=>{
  let user; try{ user=await requireUser(req);}catch{return err(res,401,"Auth");}
  const { caseId } = req.query;
  if(!caseId) return err(res,400,"case");
  const reps = await (await db()).collection("reports")
      .find({ caseId: new ObjectId(caseId)})
      .project({ pdf:0 }).toArray();
  res.json({ reports: reps });
}
