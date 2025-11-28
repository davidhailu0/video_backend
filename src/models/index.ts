import { sequelize } from "../config/database";
import { User } from "./User";
import { Video } from "./Video";

User.hasMany(Video, { foreignKey: "userId", as: "videos" });
Video.belongsTo(User, { foreignKey: "userId", as: "user" });

export { sequelize, User, Video };
