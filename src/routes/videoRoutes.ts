import { Router } from "express";
import { authenticateJWT } from "../middleware/authMiddleware";
import { create, getAll } from "../controllers/videoController";

const router = Router();
/**
 * @openapi
 * /videos:
 *   get:
 *     summary: Get all videos with optional search and category filters
 *     tags:
 *       - Videos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for title or description
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *     responses:
 *       200:
 *         description: List of videos
 */
router.get("/", authenticateJWT, getAll);
/**
 * @openapi
 * /videos:
 *   post:
 *     summary: Upload new video metadata
 *     tags:
 *       - Videos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - youtubeId
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               youtubeId:
 *                 type: string
 *               category:
 *                 type: string
 *               duration:
 *                 type: integer
 *               thumbnailUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Video created successfully
 */
router.post("/", authenticateJWT, create);

export default router;
