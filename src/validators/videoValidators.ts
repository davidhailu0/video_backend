import Joi from "joi";

export const videoCreateSchema = Joi.object({
  title: Joi.string().min(1).max(200).required(),
  description: Joi.string().allow("").max(5000),
  youtubeId: Joi.string().max(50).required(),
  category: Joi.string().max(100).allow(""),
  duration: Joi.number()
    .min(0)
    .max(24 * 3600),
  thumbnailUrl: Joi.string().uri().max(255),
});
