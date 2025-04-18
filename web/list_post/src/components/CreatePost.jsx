import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {  useForm } from "react-hook-form";
import { useCreatePublicationMutation } from "../features/api/publicationApi";
import Swal from 'sweetalert2'

const guestSchema = yup.object().shape({
  title:yup.string().required("The title is required")
  .min(3,"The title must be at least 3 characters")
  .max(50,"The title must be less than 50 characters "),
  description:yup.string()
  .min(0).max(100,"The description must be less than 100 characters")
})

const schema = yup.object({
  guests:yup.array().of(guestSchema)
})

export const CreatePost = () => {

  const [createPublication, {isLoading}] = useCreatePublicationMutation()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  
    const onSubmit = async (FormData) =>{
      const dataFormat = {
        PostName:FormData.title,
        PostDescription:FormData.description
      }
      try {
        await createPublication(dataFormat).unwrap();
        reset();
        Swal.fire('Success', 'Publication created successfully!', 'success');
      } catch (error) {
        console.log(error)
        Swal.fire('Error', 'Failed to create publication', 'error');
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col justify-center items-center">
      <h3 className="my-5 text-xl font-sans italic">Create a new publication</h3>
      <div className="flex flex-col gap-4 p-4 items-center max-w-64  mb-20 bg-slate-200/90 rounded-lg shadow">
        <div className="">
          <label htmlFor="information">Title</label>
          <input {...register('title') } type="text" className="w-full focus:outline-none shadow px-6 py-2 rounded-md   focus: ring-2 focus:ring-gray-400 focus:border-gray-400" />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="information">Description</label>
          <textarea  {...register('description')}
          type="text" rows="4" className="w-full mt-0.5  resize-none  border-gray-300  sm:text-sm focus:outline-none shadow px-6 py-2 rounded-md   focus: ring-2 focus:ring-gray-400 focus:border-gray-400" />
          {errors.description && <p>{errors.description.message}</p>}
        </div>  
        <button type="submit"  disabled={isLoading} className="flex items-center gap-2 bg-gray-900 text-white text-base hover:bg-gray-700 font-semibold italic rounded-lg px-6 py-2  focus:ring-2 focus:ring-gray-600 focus:border-gray-600 cursor-pointer">
          
          {isLoading ? 'Creating...' : 'Create publication'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
    </form>
    </>
  )
}

