// 'use client'
// import Blogpostlist from '@/components/dashboard/blogpostlist'
// import axios from 'axios'
// import Link from 'next/link'
// import React from 'react'



// const Page = () => {

    
//     return (
//         <>
//             <div className='w-full relative flex flex-col items-center overflow-y-auto'>
//                 <div className='w-80 h-80 -z-10 absolute bg-blue-900 blur-[200px]'></div>
//                 <div className='flex flex-col w-11/12 my-6 '>
//                     <div className='text-base my-4capitalize pb-4'>
//                         <div className='w-60 flex justify-start items-center space-x-6 pl-4 text-left'>
//                             <div className='text-lg capitalize '>review</div>
//                             <Link href={'/signup'} className='w-full  text-center py-2 capitalize bg-blue-900/30 bg-gradient rounded-lg ring-1 flex justify-center items-center'>add review</Link>
//                         </div>
//                     </div>
//                     <div className='w-full bg-blue-900/30 rounded-lg ring-1 flex p-6 '>
//                         <div className='w-full'>
//                             <h2 className='text-lg p-4'>Blog Post List</h2>
//                             {/* {loading?<div className='w-full h-44 flex justify-center items-center'><span className="loader"></span></div>: */}
//                             <table className='bg-blue-900 w-full rounded-lg'>
//                                 <thead className=''>
//                                     <tr className='w-full text-sm text-left'>
//                                         <th className='w-auto py-2'>AuthorImage</th>
//                                         <th className='w-[30%]'>Username</th>
//                                         <th className='w-auto'>Email</th>
//                                         <th className='w-auto'>Creation Date</th>
//                                         <th className='w-auto'>Role</th>
//                                         <th className='w-[10%]'>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className=''>
//                                 {/* {bloglist.map((data,index)=>(
//                                     <tr className='' key={index}>
//                                         <Blogpostlist id={data._id} author={data.author} title={data.title} status={data.status} category={data.categories} date={data.createdAt} featuredImage={data.featuredImage} description={data.description}/>
//                                     </tr>
//                                 ))} */}
//                                 </tbody>
//                             </table>
//                             {/* } */}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Page
