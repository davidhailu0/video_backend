import { Op } from "sequelize";
import { Video } from "../models/Video";

export async function createVideo(
  userId: number,
  payload: {
    title: string;
    description?: string;
    youtubeId: string;
    category?: string;
    duration?: number;
  }
) {
  const video = await Video.create({ userId, ...payload });
  return video;
}

export async function listVideos(params: {
  search?: string;
  category?: string;
  page?: string;
  limit?: string;
}) {
  const { page = 1, limit = 10 } = params;
  const where: any = {};
  if (params.search) {
    where[Op.or] = [
      { title: { [Op.like]: `%${params.search}%` } },
      { description: { [Op.like]: `%${params.search}%` } },
    ];
  }
  if (params.category) where.category = params.category;
  const offset = (Number(page) - 1) * Number(limit);
  const { rows, count } = await Video.findAndCountAll({
    where,
    limit: Number(limit),
    offset,
    order: [["createdAt", "DESC"]],
  });

  return {
    videos: rows,
    pagination: {
      total: count,
      page,
      limit,
      totalPages: Math.ceil(count / Number(limit)),
    },
  };
}
