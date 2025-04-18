import { prisma } from "../../../shared/prisma.js"

export const GetAllPublicationDB = async () =>{
  
  const responseDB = await prisma.publication.findMany({
    where:{deleted_status: 0},
    select:{
      id_publication:true,
      name:true,
      description:true,
    },
    orderBy:{
      created_at:'desc'
    }
  });
  return responseDB
} 



export const CreatePublicationDb = async (FormData) => {
  const responseDB = await prisma.publication.create({
    data:{
      name:FormData.PostName,
      description:FormData.PostDescription
    },
    select: {
      id_publication: true,
      name: true,
      description: true,
    },
  }) 

  return responseDB
}


export const UpdatePublicationDb = async (IdPublication, FormData) =>{
  const responseDb = await prisma.publication.update({
    where:{
      id_publication: IdPublication
    },
    data: {
      name:FormData.PostName,
      description:FormData.PostDescription
    },
    select: {
      id_publication: true,
      name: true,
      description: true,
    },
  })
  return responseDb
}


export const DeletePublicationDb = async (IdPublication) => {
  const responseDb = await prisma.publication.update({
    where:{
      id_publication: IdPublication,
      deleted_status:0,
    },
    data: {
      deleted_status:1,
    },
  
  })
  return responseDb
}