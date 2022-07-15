import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import chatRoute from "./routes/chatRoute.mjs";
import messageRoute from "./routes/messageRoute. js";

const app = express();
app.use(express.json);
app.use("/chat", chatRoute);
app.use("/message", messageRoute);

app.use(cors());

mongoose.connect(
  "mongodb+srv://xmen-001:123456789abcd@chatcluster.6nicw.mongodb.net/test",
  { useNewUrlParser: true }
);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
