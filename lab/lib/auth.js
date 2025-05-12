import { getToken } from "next-auth/jwt";

export async function requireAdmin(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.role !== "admin") throw new Error("UNAUTH");
  return { labId: token.sub };          // sub === admin._id
}

export async function requireUser(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.role !== "user") throw new Error("UNAUTH");
  return { userId: token.sub };
}
