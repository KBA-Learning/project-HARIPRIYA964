import express,{json} from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { adminRouter } from "./routes/adminRouter.js";
import { userRoute } from "./routes/userRouter.js";


dotenv.config()
const port = process.env.Port

const app = express();
app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(json());
app.use(cookieParser());
// app.use("/", routes);
app.use("/",adminRouter );
app.use("/",userRoute);
app.use('/Images',express.static('uploads'))



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/Event_Management");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
