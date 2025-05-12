import db from "../../../lib/mongodb";
import { requireUser } from "../../../lib/auth";
export default async (req,res)=>{
  let user;
 try{ user=await requireUser(req);}catch{return err(res,401,"Auth");}
  const { relationId } = req.query;
  if(!relationId) return err(res,400,"id");
  const cases = await (await db()).collection("cases")
      .find({ relationId: new ObjectId(relationId)})
      .sort({ visitDate:-1 }).toArray();
  res.json({ cases });
}
