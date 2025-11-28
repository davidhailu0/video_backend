import { Router } from "express";
import { authenticateJWT } from "../middleware/authMiddleware";
import {
  getUsers,
  updateMe,
  uploadAvatar,
} from "../controllers/userController";
import { upload } from "../utils/upload";

const router = Router();
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", authenticateJWT, getUsers);
/**
 * @openapi
 * /users/me:
 *   put:
 *     summary: Update current user information
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put("/me", authenticateJWT, updateMe);
/**
 * @openapi
 * /users/avatar:
 *   post:
 *     summary: Upload user avatar
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Avatar uploaded successfully
 */
router.post("/avatar", authenticateJWT, upload.single("avatar"), uploadAvatar);

export default router;
