import express, { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const ROUTER = express.Router();

ROUTER.post("/register", register);
ROUTER.post("/login", login);
ROUTER.post("/logout", logout);

export default ROUTER;
