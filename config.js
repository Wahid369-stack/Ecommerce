const PORT =8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";
const DB_NAME = "ecom";
const DB_URL = MONGO_URL + DB_NAME;

module.exports = { PORT, DB_URL };