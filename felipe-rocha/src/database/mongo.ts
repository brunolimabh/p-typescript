import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "localhost:27017";
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    const cliente = new Mongo(url, { auth: { username, password } });
    const db = cliente.db("users-db");

    this.client = cliente;
    this.db = db;

    console.log("Connected to MongoDB!");
  },
};
