// "use client"
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Pagenamecontainer from '@/components/Pagenamecontainer'
// import Blogitemskeleton from '@/components/Blogitemskeleton'
// import BlogItem from '@/components/Blogitem'


// const Page = () => {

//   const [blogpost, setBlogpost] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       const response = await axios.get("/api/blog");
//       console.log(response.data.result)
//       setBlogpost(response.data.result)
//       setLoading(false)
//     }
//     fetchBlogData()
//   }, [])
//   return (
//     <>
//       <section>
//         <div>
//           <Pagenamecontainer pageName={'Blogs'} />
//         </div>
//       </section>
//       <div className="w-full h-fit flex justify-center">
//         <div className="w-11/12 flex justify-center items-center sm:my-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4">
//             {loading ?
//               <>
//                 {[...Array(8)].map((_, index) => (

//                   <Blogitemskeleton key={index} />

//                 ))}

//               </>
//               :
//               <>
//                 {blogpost.map((data, index) => (
//                   <div key={index}>
//                     <BlogItem
//                       slug={data.slug}
//                       featuredImage={data.featuredImage}
//                       title={data.title}
//                       description={data.description}
//                       categories={data.categories}
//                       authorName={data.author.username}
//                       authorImage={data.author.userImage}
//                       role={data.author.role}
//                       date={data.updatedAt} />
//                   </div>
//                 ))}
//               </>
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Page
