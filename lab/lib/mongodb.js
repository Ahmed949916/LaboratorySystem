import { MongoClient } from "mongodb";

let client;
export default async function db() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
  }
  return client.db();                  
}
