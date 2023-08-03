const { MongoClient } = require("mongodb");
const PORT = process.env.MONGODB_PORT || 27017;
const HOST = process.env.MONGODB_HOST || "127.0.0.1";

async function main() {
  const client = new MongoClient(`mongodb://${HOST}:${PORT}/MovieLens`, {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected successfully to server");
    await client.db().collection("movies").insertOne({
      someKey: "gg",
    });
    const result = await client.db().collection("movies").findOne({});
    console.log(JSON.stringify(result));
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
