// 'use client'
// import React, { useContext, useEffect, useState } from 'react'
// import Image from 'next/image'
// import { useParams } from 'next/navigation'
// import axios from 'axios'
// import Pagenamecontainer from '@/components/pagenamecontainer'
// import { format } from 'date-fns'
// import { UserContext } from '@/context/usercontext'


// const Page = () => {
//     const { slug } = useParams();
//     const [blog, setBlog] = useState('');
//     const [date, setDate] = useState(null)
//     const { cuser } = useContext(UserContext)
//     const [loading, setLoading] = useState(true)
//     const [imageloading, setImageloading] = useState(true)
//     const [comment, setComment] = useState('')
//     const [fetchcomments, setFetchcomments] = useState([])
//     const [fcloading, setFcloading] = useState(true)
//     const [replybox, setReplybox] = useState(null) // Store the ID of the comment being replied to
//     const [addreply, setAddreply] = useState('') // Store the reply content

//     const dateformat = new Date(date)
//     const formatedDate = format(dateformat, 'MMM dd, yy');

//     const imageloadinghandler = () => {
//         setImageloading(false)
//     }

//     useEffect(() => {
//         const FetchBlog = async () => {
//             const response = await axios.get(`/api/blog/${slug}`);
//             setBlog(response.data.result)
//             setDate(response.data.result.updatedAt)
//             setLoading(false)
//         }
//         FetchBlog();
//     }, [slug])

//     const commentchangehandler = (e) => {
//         setComment(e.target.value)
//     }

//     const commentsubmithandler = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/blog/comments', {
//                 content: comment,
//                 post: blog._id,
//                 user: cuser.id
//             })
//             const newComment = response.data.result;
//             setFetchcomments((prevComments) => [newComment, ...prevComments]);
//         } catch (error) {
//             console.log('Error submitting comment:', error);
//         }
//     }

//     useEffect(() => {
//         if (blog) {
//             const FetchComments = async () => {
//                 const response = await axios.get(`/api/blog/comments?id=${blog._id}`)
//                 setFetchcomments(response.data.result)
//                 setFcloading(false)
//             }
//             FetchComments()
//         }
//     }, [blog])

//     const onreplyhandler = (commentId) => {
//         setReplybox(commentId); // Set the replybox to the ID of the comment you're replying to
//     }

//     const onaddhandler = async (e, parentId) => {
//         e.preventDefault();
//         if (!addreply.trim()) return; // Don't submit empty replies

//         try {
//             const response = await axios.post('/api/blog/comments', {
//                 content: addreply,
//                 post: blog._id,
//                 user: cuser.id,
//                 parentComment: parentId // Send the parent comment ID when it's a reply
//             })
//             const newComment = response.data.result;
//             setFetchcomments((prevComments) => [newComment, ...prevComments]); // Add the new reply
//             setAddreply(''); // Clear the reply input
//             setReplybox(null); // Close the reply box after submitting
//         } catch (error) {
//             console.log('Error adding reply:', error);
//         }
//     }

//     return (
//         <>
//             <div className='w-full flex flex-col justify-center items-center'>
//                 <Pagenamecontainer pageName={loading ? <span className='text-base md:text-lg md:font-normal font-light'>loading...</span> : blog.title} />
//                 <div className='w-full h-fit flex flex-col justify-center items-center'>
//                     {loading ? <></> : <>

//                         <div className='w-10/12 bg-slate-700/15 ring-slate-200/10 -mt-16 mb-10 contentbox ring-2 grid grid-cols-4 rounded-xl'>
//                             <div className='blogtext col-span-4 rounded-l-xl'>
//                                 <div className='p-4 '>
//                                     <Image
//                                         className={`object-cover w-full h-1/2 rounded-xl transition-all duration-300 ${imageloading ? 'blur-sm' : 'blur-0'
//                                             }`}
//                                         src={blog.featuredImage}
//                                         alt={blog.title || ''}
//                                         onLoadingComplete={imageloadinghandler}
//                                         width={1000}
//                                         height={800}></Image>
//                                 </div>
//                                 <div className='p-8 flex space-y-4 flex-col'>
//                                     <h1 className=' text-start sm:text-3xl text-2xl font-extrabold'>{blog.title || ''}</h1>
//                                     <div>
//                                         <span>{formatedDate || ''} </span>
//                                         <span>by {blog.author && blog.author.username ? blog.author.username : 'Unknown'}</span>
//                                     </div>
//                                     <div>
//                                         <p>{blog.content || ''}</p>
//                                         <p className='py-6'>Sharing Is Caring:</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className=' col-span-4 border rounded-xl border-slate-500/25 bg-blue-950/15 flex justify-start items-center p-10 '>

//                             <div className='w-1/2 p-10 rounded-lg flex-col flex'>
//                                 <h1 className=' font-bold text-2xl'>Comments</h1>
//                                 <div className=' w-full flex flex-col items-center' >
//                                     <textarea onChange={commentchangehandler} className='w-full bg-blue-950/10 rounded-xl p-2' type="text" placeholder='enter comment' />
//                                     <button onClick={commentsubmithandler} className='bg-black text-white py-1 px-2 rounded-lg m-5'>submit</button>
//                                 </div>
//                             </div>

//                             <div className='w-full'>
//                                 {fcloading ? <></> :
//                                     <div className=' w-full'>
//                                         {fetchcomments?.map((data, index) => (
//                                             <div key={index} className=''>
//                                                 <div className='pl-2 border-l-4 border-purple-800'>{data.content}</div>
//                                                 {/* If it's the comment being replied to, show the reply box */}

//                                                 {fetchcomments.parentComment && fetchcomments.parentComment.length>0 &&
//                                                 <>
//                                                 <div>nested comment</div>
//                                                 </>
//                                                 }
//                                                 {replybox === data._id ?
//                                                     <div className='flex justify-start py-2  space-x-2 items-center'>
//                                                         <input
//                                                             onChange={(e) => setAddreply(e.target.value)}
//                                                             type="text"
//                                                             value={addreply}
//                                                             className='rounded-xl px-2'
//                                                             placeholder="Enter your reply"
//                                                         />
//                                                         <button onClick={(e) => onaddhandler(e, data._id)} className='px-2 bg-black text-white rounded-xl'>Add</button>
//                                                         <button onClick={(e) => { setReplybox(null); setAddreply(''); }} className='px-2 bg-black text-white rounded-xl'>Cancel</button>
//                                                     </div>
//                                                     :
//                                                     <div className='flex justify-start py-2 space-x-2 items-center'>
//                                                         <button onClick={() => onreplyhandler(data._id)} className='px-2 bg-black text-white rounded-xl'>Reply</button>
//                                                         <button className='px-2 bg-black text-white rounded-xl'>Edit</button>
//                                                         <button className='px-2 bg-purple-700 text-white rounded-xl'>Delete</button>
//                                                     </div>
//                                                 }
                                                
//                                             </div>
//                                         ))}
//                                     </div>
//                                 }
//                             </div>
//                         </div>
//                         </div>
                        

//                     </>}

//                 </div>

//             </div>

//         </>
//     )
// }

// export default Page;
