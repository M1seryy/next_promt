import mongoose from "mongoose";

let isConected = false;

export const connectDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConected) {
    console.log("mongo is working");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "share_promt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo is working");
  } catch (error) {
    console.log("mongo ERROR" + error);
  }
};
