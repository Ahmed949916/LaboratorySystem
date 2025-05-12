import db from "../../../lib/mongodb";
import { requireUser } from "../../../lib/auth";
export default async (req,res)=>{
  let user;
 try{ user=await requireUser(req);}catch{return err(res,401,"Auth");}

const userId=user.labId
const label=req.query.label
const currentLab=req.query.currentLab
 
let  relation = await dbo.collection("relations").findOne({
        userId:new ObjectId(userId),
        label,
      });

  let relationId=relation?._id.toString()
  if(!relationId) return err(res,400,"id");
// If label=self get those with no relationid 

  const cases = await (await db()).collection("cases")
      .find({ relationId: new ObjectId(relationId)})
      .sort({ visitDate:-1 }).toArray();
  res.json({ cases });
}
