// 'use client'
// import Blogpostlist from '@/components/dashboard/blogpostlist'
// import axios from 'axios'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'



// const Page = () => {
//     const [bloglist, setBloglist] = useState([])
//     const [loading, setLoading] = useState(true)



//     useEffect(() => {
//         const getBlogList = async () => {
//             const response = await axios.get('/api/blog');
//             setBloglist(response.data.result)
//             setLoading(false)
//         }
//         getBlogList()
//     }, [])


//     const ondeletehandler = async (id) => {
//             setBloglist((prevBlog) => prevBlog.filter((list) => list._id !== id));
//     };



//     return (
//         <>
//             <div className='w-full relative flex flex-col items-center overflow-y-auto'>
//                 <div className='w-80 h-80 -z-10 absolute bg-blue-900 blur-[200px]'></div>
//                 <div className='flex flex-col w-11/12 my-6 '>
//                     <div className='text-base my-4capitalize pb-4'>
//                         <div className='w-60 flex justify-start items-center space-x-6 pl-4 text-left'>
//                             <div className='text-lg capitalize '>post</div>
//                             <Link href={'/dashboard/bloglist/addblog'} className='w-full  text-center py-2 capitalize bg-blue-900/30 bg-gradient rounded-lg ring-1 flex justify-center items-center'>add new post</Link>
//                         </div>
//                     </div>
//                     <div className='w-full bg-blue-900/30 rounded-lg ring-1 flex p-6 '>
//                         <div className='w-full'>
//                             <h2 className='text-lg p-4'>Blog Post List</h2>
//                             {loading ? <div className='w-full h-44 flex justify-center items-center'><span className="loader"></span></div> :
//                                 <table className='bg-blue-900 w-full rounded-lg'>
//                                     <thead className=''>
//                                         <tr className='w-full text-sm text-left'>
//                                             <th className='w-auto py-2'>Author</th>
//                                             <th className='w-[30%]'>Title</th>
//                                             <th className='w-auto'>Category</th>
//                                             <th className='w-auto'>Date</th>
//                                             <th className='w-auto'>Status</th>
//                                             <th className='w-[10%]'>Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className=''>
//                                         {bloglist.map((data, index) => (
//                                             <tr className='' key={index}>
//                                                 <Blogpostlist id={data._id} author={data.author} title={data.title} status={data.status} category={data.categories} date={data.createdAt} featuredImage={data.featuredImage} content={data.content} ondelete={ondeletehandler} />
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Page
