import { useState,useEffect } from "react"
import Footer from "../layouts/Footer"
import { Header } from "../layouts/Header"

export const Home = () => {

  const [post,setPost] = useState([])

  useEffect(()=>{
    
    const fetchPost = async () =>{
      try {
        const response = await fetch('http://localhost:3000/api/v1/publication')
        const data = await response.json()
        setPost(data);
      } catch (error) {
        console.error(error)
      }
    }

  console.log(fetchPost())


  },[])

  return (
    <>
    <div className="orderView">
      <Header/>
      <main className="bg-gray-100 px-10">
      <div className="flex items-center mt-20">
        <span className="h-px flex-1 bg-gray-300"></span>
        <span className="shrink-0 px-4 text-gray-900 italic text-3xl font-semibold">The Post</span>
        <span className="h-px flex-1 bg-gray-300"></span>
      </div>
      <div className="flex justify-end">
        <span className="flex italic text-lg items-center gap-1">View principal post    <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg> 
        </span>
        
      </div>

        <div className="flex justify-center items-center my-10 gap-6">
          <div className="w-100">
            <input type="search" placeholder="Search post" aria-label="search" className="w-full focus:outline-none shadow px-6 py-2 rounded-md  border-gray-200 focus: ring-2 focus:ring-blue-400 focus:border-blue-400" />
          </div>
            <button className="flex justify-center items-center gap-2 bg-blue-600 text-white text-base font-semibold italic rounded-lg  px-6 py-2 focus: ring-2 focus:ring-blue-400 focus:border-blue-400 cursor-pointer">
              Search 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
        </div>
        <div  className="flex justify-center max-h-96 overflow-x-auto m-10 p-x10">
          <table className="min-w-4xl divide-y-2 divide-gray-200 shadow shadow-green-200">
            <thead className="sticky top-0 bg-gray-200  text-left ">
              <tr className="font-medium text-gray-900">
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Description</th>
                <th className="px-3 py-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 border-b-4 border-gray-300 ">

              <tr className="text-gray-900">
                <td className="px-4 py-2">Nandor the Relentless</td>
                <td className="px-4 py-2">04/06/1262</td>
                <td className="px-4 py-2 flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-red-600/70 text-white text-base font-semibold italic rounded-lg px-6 py-2 focus: ring-2 focus:ring-red-600 focus:border-red-600 cursor-pointer">
                  Delete
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                  </button>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center my-20">
          <button className="flex items-center gap-2 bg-gray-900 text-white text-base font-semibold italic rounded-lg px-6 py-2 focus: ring-2 focus:ring-gray-600 focus:border-gray-600 cursor-pointer">
            Create a new post
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </button>
        </div>
      </main>
      <Footer/>
    </div>
    </>
  )
}
