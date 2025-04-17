import joi from "joi"


export const createPublicationDto = joi.object({
  post_name:joi.string().min(4).max(100).required(),
  post_description:joi.string().min(0).max(500),
})


export const responsePublicationDto = (dataRaw) =>{
  return {
    post_id:dataRaw.id_publication,
    post_name:dataRaw.name,
    post_description:dataRaw.description
  }
}

export const responseAllPublicationDto = (dataRaw) =>{
  return dataRaw.map((item)=> ({
    post_id:item.id_publication,
    post_name:item.name,
    post_description:item.description
  }))
  
}
