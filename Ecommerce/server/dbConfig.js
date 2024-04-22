require('dotenv');
const mongoose =  require("mongoose");
// const { DATABASE_NAME, MONGODB_LOCAL_URI } from "./config";
dotenv.config({path : './config.env'});
const DB = process.config.MONGO_URI;

const dbConnect = async () => {
  const atlasUri = "mongodb://localhost:27017/cart";

  mongoose.set("strictQuery", true);

  const connection = await mongoose.connect(atlasUri);
  console.log("MongoDB connencted successfully!!");
  return connection;
};

module.exports = dbConnect;