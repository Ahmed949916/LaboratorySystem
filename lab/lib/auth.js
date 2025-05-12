import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function requireAdmin(req) {
  const token = await getToken({ req, secret });
  if (!token || token.role !== "admin" || !token.sub) throw new Error("UNAUTH");
  return { labId: token.sub }; // token.sub is the user ID
}

export async function requireUser(req) {
  const token = await getToken({ req, secret });
  if (!token || token.role !== "user" || !token.sub) throw new Error("UNAUTH");
  return { labId: token.sub };
}
