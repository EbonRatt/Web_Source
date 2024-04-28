import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import multer from "multer";

import postRoutes from "./routes/posts.routes.js";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = 8080;

app.use(
  cors({
    origin: [
      "https://web-source-api.vercel.app",
    ],
    method: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", function (req, res) {
  res.json("Working");
});

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/user", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
