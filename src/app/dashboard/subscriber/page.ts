// 'use client'
// // import Getuserlist from '@/components/dashboard/getuserlist'
// import axios from 'axios'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// const Page = () => {
//     // const [userlist, setUserlist] = useState([])
//     // const [loading, setLoading] = useState(true)

//     // useEffect(() => {
//     //     const getuserlist = async () => {
//     //         const response = await axios.get('/api/user/userlist');
//     //         setUserlist(response.data.result)
//     //         setLoading(false)
//     //     }
//     //     getuserlist();
//     // }, [])

//     // console.log(userlist)


//     return (
//         <>
//             <div className='w-full relative flex flex-col items-center overflow-y-auto'>
//                 <div className='w-80 h-80 -z-10 absolute bg-blue-900 blur-[200px]'></div>
//                 <div className='flex flex-col w-1/2 my-6 '>
//                     {/* <div className='text-base my-4capitalize pb-4'>
//                         <div className='w-60 flex justify-start items-center space-x-6 pl-4 text-left'>
//                             <div className='text-lg capitalize '>user</div>
//                             <Link href={'/signup'} className='w-full  text-center py-2 capitalize bg-blue-900/30 bg-gradient rounded-lg ring-1 flex justify-center items-center'>add new user</Link>
//                         </div>
//                     </div> */}
//                     <div className='w-full bg-blue-900/30 rounded-lg ring-1 flex p-6 '>
//                         <div className='w-full'>
//                             <h2 className='text-lg p-4'>New Letter Subscriber</h2>
//                             {/* {loading ? <div className='w-full h-44 flex justify-center items-center'><span className="loader"></span></div> : */}
//                                 <table className='bg-blue-900 w-full rounded-lg'>
//                                     <thead className=''>
//                                         <tr className='w-full text-sm text-left'>
//                                             <th className='w-[40%]'>Email</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className=''>
//                                         {/* {userlist.map((data, index) => (
//                                             <tr className='' key={index}>
//                                                 <Getuserlist date={data.createdAt} userImage={data.userImage} username={data.username} email={data.email} role={data.role} isVerified={data.isVerified} />
//                                             </tr>
//                                         ))} */}
//                                     </tbody>
//                                 </table>
//                             {/* } */}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Page
