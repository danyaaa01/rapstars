var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("rapstars");
database.dropDatabase()
database = client.db("rapstars");
const cats = database.collection("rappers");
const result = await cats.insertOne({name:"Юра Авангард"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()