import { useState } from "react"
import Footer from "../layouts/Footer"
import { Header } from "../layouts/Header"
import  { ListPost }  from "../components/ListPost"
import { CreatePost } from "../components/CreatePost"
import { useGetPublicationsQuery  } from "../features/api/publicationApi"

export const Home = () => {
  const [ search, setSearch] = useState("");
  const { data:publications = [], error, isLoading } = useGetPublicationsQuery()
  if(isLoading) return <p>Loading Publications</p>
  if(error) return <p>Error: {error.message}</p>
  const filteredPublications = publications.filter((item)=>{
    return item.post_name.toLowerCase().includes(search.toLowerCase())
  })
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
            <input type="search" value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search post" aria-label="search" 
            className="w-full focus:outline-none shadow px-6 py-2 rounded-md  border-gray-200 focus: ring-2 focus:ring-blue-400 focus:border-blue-400" />
          </div>
        </div>
        <div  className="flex justify-center max-h-96 overflow-x-auto m-10 p-x10">
          <table className="min-w-4xl divide-y-2 divide-gray-200 shadow-lg shadow-slate-200">
            <thead className="sticky top-0 bg-gray-200  text-left ">
              <tr className="font-medium text-gray-900">
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Description</th>
                <th className="px-3 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-b-4 border-gray-300 ">
            {
              filteredPublications.map((post)=>(
                <ListPost key={post?.post_id} id={post.post_id} name={post.post_name} description={post.post_description}/>
              ))
            }
            </tbody>
          </table>
        </div>
        <CreatePost/>
      </main>
      <Footer/>
    </div>
    </>
  )
}
