// import db from "../../../lib/mongodb";
// import { requireUser } from "../../../lib/auth";
// export default async function handler(req,res){
//   let user;
//   try{ user = await requireUser(req);}catch{ return err(res,401,"Auth"); }
//   const { labId } = req.query;               // front‑end sends ?labId=...
//   if(!labId) return err(res,400,"labId?");
//   const rels = await (await db()).collection("relations")
//       .find({ labId: new ObjectId(labId), userId: new ObjectId(user.userId)})
//       .project({ pdf:0 }).toArray();
//   res.json({ relations: rels });
// }
