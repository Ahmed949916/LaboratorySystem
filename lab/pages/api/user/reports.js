import db from "../../../lib/mongodb";
 
export default async (req,res)=>{
   
  const { caseId } = req.query;
  if(!caseId) return err(res,400,"case");
  const reps = await (await db()).collection("reports")
      .find({ caseId: new ObjectId(caseId)})
      .project({ pdf:0 }).toArray();
  res.json({ reports: reps });
}
