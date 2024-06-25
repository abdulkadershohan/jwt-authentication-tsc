import express from "express";
import { signup } from "./controller";

const router = express.Router();
router.get("/", (req, res) => {
    res.send("user list");
});
router.post("/signup", signup)
export default router;