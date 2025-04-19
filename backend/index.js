import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book_route.js"
import userRoute from "./route/user_route.js"

const app = express();
// const port = 3000;
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT||4000;
const URI = process.env.MongoDBURI;

// connect to mongodB
// try{
//    mongoose.connect(URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//    });
  
//    console.log("connected to mongodb");
// } catch(error) {
//     console.log("Error: ", error);
// }
mongoose.connect("your-full-uri-here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully!"))
.catch(err => console.error("❌ MongoDB error:", err));

// defining routes for
app.use("/book", bookRoute);
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
    