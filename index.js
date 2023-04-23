import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import adminRouter from "./routes/Admin.js";
//

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";

// Payment Imports
import dotenv from "dotenv";
dotenv.config();

// creating app
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());




app.get("/", (req, res) => {
  res.send("Backend setup");
});

//Routes


app.use(express.json());

app.use("/admin", adminRouter);
//
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


const CONNECTION_URL =
"mongodb+srv://worker:lXMcCnzLWjHrLWaL@vchat.i3f2sus.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

// connecting mongoDB to server
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT} *=*`))
  )
  .catch((error) => console.log(error.message));
