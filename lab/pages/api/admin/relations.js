import db from "../../../lib/mongodb";

export default async function handler(req, res) {
  const dbo = await db();

  if (req.method === "GET") {
    const phone = req.query.phone;
     
    const user = await dbo.collection("users").findOne({ phone });
       if(!user){
     
      return res.json({ error: "User not found" });
    }
    const relations = await dbo.collection("relations")
      .find({ userId: user._id }).toArray();



    return res.json({ relations,user });
  }

  if (req.method === "POST") {
    const { phone, label, name } = req.body;
    if (!phone || !label) return res.status(400).json({ error: "Missing parameters" });

    const user = await dbo.collection("users").findOne({ phone })
 
    const doc = {
      userId: user._id,
      label,
      name,
      createdAt: new Date(),
    };

    const result = await dbo.collection("relations").updateOne(
      { userId: doc.userId, label: doc.label },
      { $setOnInsert: doc },
      { upsert: true }
    );

    return res.json({ ok: true, upserted: result.upsertedId ?? null });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end();
}
