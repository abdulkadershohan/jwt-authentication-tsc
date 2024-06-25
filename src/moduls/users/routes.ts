import express from "express";
import { login, logout, signup } from "./controller";
import { authGuard } from "../../middlewares/authGuard";

const router = express.Router();
router.get("/", authGuard, (req, res) => {
    res.send("user list");
});
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
export default router;