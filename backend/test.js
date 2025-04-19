import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
// const mongoose = require('mongoose');

console.log("Connecting to:", process.env.MongoDBURI);

mongoose.connect(process.env.MongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  process.exit();
})
.catch((err) => {
  console.error("❌ Failed to connect:", err);
  process.exit(1);
});
