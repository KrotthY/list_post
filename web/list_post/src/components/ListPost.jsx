import PropTypes from 'prop-types'
import { useDeletePublicationMutation } from '../features/api/publicationApi'
import Swal from 'sweetalert2'
export const ListPost = ({id,name,description}) => {

  const [deletePublication , {isLoading}] = useDeletePublicationMutation()

  if(isLoading) return Swal.showLoading();


  const handleDeleted = async (id) =>{
    const result = await Swal.fire({
      icon: 'question',
      title: 'Are you sure?',
      text: 'This action will delete the post.',
      confirmButtonText: 'Yes, deleted it!',
      cancelButtonText:'No, cancel',
      showCancelButton: true,
      showCloseButton: true
    })
    if(result.isConfirmed){
      try {
        Swal.fire({
          title: 'Deleting...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        await deletePublication(id).unwrap()

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error deleted',
          text: error?.data?.message || 'Unexpected error',
          confirmButtonText: 'Ok'
        });
      }
    }
  }

  return (
    <>
      <tr className="text-gray-900">
        <td className="px-4 py-2">{ name }</td>
        <td className="px-4 py-2">{ description }</td>
        <td className="px-4 py-2 flex items-center justify-center">
          <button onClick={()=>handleDeleted(id)}  className="flex items-center gap-2 hover:bg-red-600 bg-red-600/50 text-white text-base font-semibold italic rounded-lg px-6 py-2 focus: ring-2 focus:ring-red-600 focus:border-red-600 cursor-pointer">
          Delete
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          </button>
        </td>
      </tr>
    </>
  )
}

ListPost.propTypes = {
  id:PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}
