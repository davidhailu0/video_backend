import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface VideoAttrs {
  id: number;
  userId: number;
  title: string;
  description?: string | null;
  youtubeId: string;
  category?: string | null;
  duration?: number | null;
  thumbnailUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

type VideoCreationAttrs = Optional<
  VideoAttrs,
  "id" | "description" | "category" | "duration" | "createdAt" | "updatedAt"
>;

export class Video
  extends Model<VideoAttrs, VideoCreationAttrs>
  implements VideoAttrs
{
  public id!: number;
  public userId!: number;
  public title!: string;
  public description!: string | null;
  public youtubeId!: string;
  public category!: string | null;
  public duration!: number | null;
  public thumbnailUrl!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Video.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    title: { type: DataTypes.STRING(200), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    youtubeId: { type: DataTypes.STRING(50), allowNull: false },
    category: { type: DataTypes.STRING(100), allowNull: true },
    duration: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
    thumbnailUrl: { type: DataTypes.STRING(255), allowNull: true },
  },
  { sequelize, tableName: "videos", timestamps: true }
);
