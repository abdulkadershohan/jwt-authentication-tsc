import express from "express";
import { login, logout, signup } from "./controller";

const router = express.Router();
router.get("/", (req, res) => {
    res.send("user list");
});
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
export default router;