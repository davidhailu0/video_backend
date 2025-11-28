import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import videoRoutes from "./videoRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/videos", videoRoutes);

export default router;
