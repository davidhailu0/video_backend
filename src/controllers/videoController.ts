import { Request, Response, NextFunction } from "express";
import { videoCreateSchema } from "../validators/videoValidators";
import { createVideo, listVideos } from "../services/videoService";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { value, error } = videoCreateSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const me = (req as any).user;
    const video = await createVideo(me.userId, value);
    res.status(201).json(video);
  } catch (err) {
    next(err);
  }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { search, category, page, limit } = req.query as {
      search?: string;
      category?: string;
      page?: string;
      limit?: string;
    };
    const videos = await listVideos({ search, category, page, limit });
    res.json(videos);
  } catch (err) {
    next(err);
  }
}
