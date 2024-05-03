import express from "express";
import cookie from "cookie-parser";
import cors from "cors";

import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const APP = express();
const PORT = 8080;

APP.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // credentials allow send Cookie
APP.use(express.json());
APP.use(cookie());

APP.use("/api/post/", postRoute);
APP.use("/api/auth/", authRoute);

APP.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
