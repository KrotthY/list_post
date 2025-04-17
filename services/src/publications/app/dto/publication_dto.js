import joi from "joi"


export const createPublicationDto = joi.object({
  post_name:joi.string().min(4).max(100).required(),
  post_description:joi.string().min(0).max(500),
})