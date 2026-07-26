import mongoose from "mongoose";

const  dbconnect = async (uri) => {
    try {
    await mongoose.connect(uri);
    console.log("Database connected!");
    return;
  } catch (err) {
    console.log('Failed', err.message);
    return;
  }
}

export default dbconnect;