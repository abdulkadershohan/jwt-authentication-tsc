import express from "express";
import UserRoutes from "../moduls/users/routes";

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Hello World");
});
// user routes
router.use("/user", UserRoutes);

export default router;