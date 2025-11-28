import { Router } from "express";
import { authenticateJWT } from "../middleware/authMiddleware";
import { create, getAll } from "../controllers/videoController";

const router = Router();
router.get("/", authenticateJWT, getAll);
router.post("/", authenticateJWT, create);

export default router;
