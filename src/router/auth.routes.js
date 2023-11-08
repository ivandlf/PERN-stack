import { Router } from "express";
import { logout, profile, signin, signup } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/logout", logout);

router.get("/profile", profile);

export default router;