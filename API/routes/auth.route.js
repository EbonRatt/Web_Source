import express, { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  login,
  logout,
  register,
  verifyCookie,
} from "../controllers/auth.controller.js";

const ROUTER = express.Router();

ROUTER.post("/register", register);
ROUTER.post("/login", login);
ROUTER.post("/logout", logout);
ROUTER.get("/verifyCookie", verifyToken, verifyCookie);

export default ROUTER;
