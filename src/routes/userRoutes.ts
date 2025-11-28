import { Router } from "express";
import { authenticateJWT } from "../middleware/authMiddleware";
import {
  getUsers,
  updateMe,
  uploadAvatar,
} from "../controllers/userController";
import { upload } from "../utils/upload";

const router = Router();
router.get("/", authenticateJWT, getUsers);
router.put("/me", authenticateJWT, updateMe);
router.post("/avatar", authenticateJWT, upload.single("avatar"), uploadAvatar);

export default router;
