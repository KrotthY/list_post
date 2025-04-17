import { CreatePublicationService, DeletePublicationService, GetAllPublicationService, UpdatedPublicationService } from "../core/services/publication_service.js"
import { responseAllPublicationDto, responsePublicationDto } from "./dto/publication_dto.js"


export const GetPublications =async  (req,res,next) =>{
  try{
    const PublicationResponse = await  GetAllPublicationService()
    res.status(200).json({success:true, data:responseAllPublicationDto(PublicationResponse)})
  }catch(error){
    next(error)
  }
}


export const CreateNewPublication = async (req,res,next)=>{
  try {
    const CreateResponse = await CreatePublicationService(req.body)
    res.status(200).json({success:true,data:responsePublicationDto(CreateResponse)})
  } catch (error) {
    next(error)
  }
}


export const UpdatePublication = async (req,res,next) => {
  try {
    const IdPublication = parseInt(req.params.id)
    const updateResponse =await UpdatedPublicationService(IdPublication,req.body)
    res.status(200).json({success:true,data:responsePublicationDto(updateResponse)})
  } catch (error) {
    next(error)
  }
}

export const DeletePublication = async (req,res,next)=>{
  try {
    const IdPublication = parseInt(req.params.id)
    await DeletePublicationService(IdPublication)
    res.status(200).json({success:true,message:"Deleted successfully"})
  } catch (error) {
    next(error)
  }
}