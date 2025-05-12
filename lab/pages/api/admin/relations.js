import db from "../../../lib/mongodb";
import { requireAdmin } from "../../../lib/auth";

export default async function handler(req, res) {
  let lab;
  try { lab = await requireAdmin(req); } catch { return err(res,401,"Auth"); }
  const dbo = await db();

  if (req.method === "GET") {
    const phone = req.query.phone;
    if (!phone) return err(res,400,"phone?");
    const user  = await dbo.collection("users").findOne({ phone });
    if (!user) return res.json({ relations: [] });

    const relations = await dbo.collection("relations")
      .find({ labId: lab.labId, userId: user._id }).toArray();
    return res.json({ relations });
  }

  if (req.method === "POST") {
    const { phone, label, fullName, age, gender } = req.body;
    if (!phone || !label) return err(res,400,"params");
    const user = await dbo.collection("users").findOne({ phone })
             || await dbo.collection("users").insertOne({ phone }).then(r=>({ _id:r.insertedId, phone }));

    const doc = {
      labId: lab.labId, userId: user._id, label,
      fullName, age: +age || null, gender, createdAt: new Date()
    };
    await dbo.collection("relations").updateOne(
      { labId: doc.labId, userId: doc.userId, label: doc.label },
      { $setOnInsert: doc },
      { upsert: true }
    );
    return res.json({ ok:true });
  }

  res.setHeader("Allow",["GET","POST"]);
  res.status(405).end();
}
