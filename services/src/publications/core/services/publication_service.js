import { CreatePublicationDb, DeletePublicationDb, GetAllPublicationDB, UpdatePublicationDb } from "../repositories/publication_repo.js"

export const GetAllPublicationService = async ()=>{
  const responseDB = await GetAllPublicationDB ()
  if(!responseDB){
    const errorDB = new Error('Publications not found')
    errorDB.status = 404
    throw errorDB
  }
  return responseDB
} 


export const CreatePublicationService = async (FormData)=>{
  const responseDB = await CreatePublicationDb(FormData)
  return responseDB
}

export const UpdatedPublicationService = async (IdPublication,FormData)=>{
  if(isNaN(IdPublication)){
    const errorDB = new Error('Publications not updated')
    errorDB.status = 400
    throw errorDB
  }

  const responseDb = await UpdatePublicationDb(IdPublication,FormData)
  return responseDb
}

export const DeletePublicationService = async (IdPublication) => {
  if(isNaN(IdPublication)){
    const errorDB = new Error('Invalid publication ID for delete')
    errorDB.status = 400
    throw errorDB
  }
  const responseDb = await DeletePublicationDb(IdPublication)
  return responseDb

}