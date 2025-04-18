import joi from "joi"


export const createPublicationDto = joi.object({
  PostName:joi.string().min(4).max(100).required(),
  PostDescription:joi.string().min(0).max(500),
})


export const responsePublicationDto = (dataRaw) =>{
  return {
    PostId:dataRaw.id_publication,
    PostName:dataRaw.name,
    PostDescription:dataRaw.description
  }
}

export const responseAllPublicationDto = (dataRaw) =>{
  return dataRaw.map((item)=> ({
    PostId:item.id_publication,
    PostName:item.name,
    PostDescription:item.description
  }))
  
}
