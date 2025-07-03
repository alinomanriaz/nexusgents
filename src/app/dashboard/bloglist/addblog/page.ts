// 'use client'
// import React, { useState, useEffect } from 'react';
// import uploadthumbnail from '../../../../../public/assets/images/userPlaceholder.jpg'
// import Image from 'next/image';
// import Addcategoryform from '@/components/dashboard/addcategoryform';
// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';


// const Page = () => {
//   const search = useSearchParams();
//   const editorId = search.get('id');
//   const editTitle = search.get('title');
//   const editContent = search.get('content');
//   const editImage = search.get('featuredImage');
//   const [authUser, setAuthUser] = useState('')
//   const [selectedcategory, setSelectedcategory] = useState([])
//   const [uploadImage, setUploadImage] = useState(false)
//   const [status, setStatus] = useState('draft')
//   const [data, setData] = useState({
//     title: '',
//     content: '',
//     author: '',
//     authorImage: '/userPlaceholder.jpg',
//     tags: ['blog', 'dev', 'design'],
//     categories: ['uncategorised'],
//     featuredImage: '',
//     status: 'draft'
//   })
//   useEffect(() => {
//     if (editorId) {
//       setData({
//         title: editTitle,
//         content: editContent
//       })
//     }
//   }, [editorId])




//   // Handle publish/draft button click
//   const handleSubmitChange = (e) => {
//     console.log(e)
//     setStatus(e);  // Set status to either 'draft' or 'publish'
//   };

//   const categorySelectHandler = (category) => {
//     setSelectedcategory(category)
//   }
//   const onChangeHandler = (e) => {
//     const name = e.target.name
//     const value = e.target.value
//     setData(pervData => ({ ...pervData, [name]: value }))

//   }

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', data.title),
//       formData.append('content', data.content),
//       formData.append('author', authUser.id),
//       formData.append('categories', JSON.stringify(selectedcategory)),
//       formData.append('tags', data.tags),
//       formData.append('status', status),
//       formData.append('featuredImage', uploadImage);

//     if (editorId) {
//       try {
//         // Send the data to the backend API endpoint 
//         const response = await axios.put(`/api/blog/${editorId}`, formData);

//         if (response.data.success) {
//           console.log('Blog post Updated:', response.data.post);
//           // Redirect or show success message
//         }
//       } catch (error) {
//         console.error('Error submitting form:', error);
//       }

//     } else {
//       try {
//         // Send the data to the backend API endpoint 
//         const response = await axios.post('/api/blog', formData);

//         if (response.data.success) {
//           console.log('Blog post created:', response.data.post);
//           // Redirect or show success message
//         }
//       } catch (error) {
//         console.error('Error submitting form:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     const getAuthData = async () => {
//       const authdata = await axios.get('/api/user/profile');
//       setAuthUser(authdata.data.user)
//     }
//     getAuthData()
//   }, [])

//   console.log(uploadImage)
//   return (
//     <div className="w-full relative flex flex-col justify-start items-center overflow-y-auto">
//       <div className='w-80 h-80 -z-10 absolute bg-blue-900 blur-[200px]'></div>
//       <div className='flex justify-center items-center w-11/12 my-6 '>
//         <form className="w-full flex justify-center items-start my-6 space-x-6" onSubmit={onSubmitHandler}>
//           {/* ///left box */}
//           <div className="w-[65%] bg-blue-900/30 rounded-lg ring-1 flex justify-center sticky top-12 ">
//             <div className="w-full p-6 h-full space-y-8">
//               <input onChange={onChangeHandler} value={data.title} name='title' type="text" placeholder='Enter Title...' className="w-full p-2 px-4 text-xl rounded-xl ring-blue-900 ring-1 focus:ring-2 bg-gray-800/50 placeholder:text-slate-200/40 focus:outline-none text-white/40" />
//               {/* <div>URL:</div> */}
//               <textarea onChange={onChangeHandler} value={data.content} name='content' className='h-96 p-2 px-4 text-xl  ring-blue-900 ring-1 focus:ring-2 bg-gray-800/50 placeholder:text-slate-200/40 focus:outline-none text-white/40 w-full rounded-xl' id=""></textarea>
//             </div>
//           </div>
//           {/* ///right box */}
//           <div className='w-[30%] space-y-5'>
//             {/* image upload components */}
//             <div className="w-full bg-blue-900/30 rounded-lg ring-1 flex flex-col justify-center">
//               <div className='ring-1 rounded-t-lg w-full text-lg text-white/40 px-6 py-1 capitalize'>update thumbnail</div>
//               <label htmlFor='image'>
//                 {editImage ?
//                   <Image className='rounded-b-xl h-44 ring-1' width={350} height={200} src={uploadImage ? URL.createObjectURL(uploadImage) : editImage} alt='thumbnail placeholder' /> :
//                   <Image className='rounded-b-xl h-44 ring-1' width={350} height={200} src={!uploadImage ? uploadthumbnail : URL.createObjectURL(uploadImage)} alt='thumbnail placeholder' />
//                 }
//               </label>
//               <input onChange={(e) => setUploadImage(e.target.files[0])} type="file" id='image' hidden />
//             </div>
//             {/* image component ended */}

//             {/* category components start */}
//             <div className="w-full bg-blue-900/30 rounded-lg ring-1 flex flex-col justify-center">
//               <div className='ring-1 rounded-t-lg w-full text-lg text-white/40 px-6 py-1 capitalize'>select category</div>
//               <div>
//                 <Addcategoryform categorySelectHandler={categorySelectHandler} />
//               </div>
//             </div>


//             {/* submit buttom */}
//             <div className="w-full flex justify-center items-center space-x-2">
//               <button className="w-full text-center py-2 capitalize bg-slate-800/50 rounded-lg ring-1 flex justify-center items-center" onClick={() => handleSubmitChange('draft')} type='submit'>draft</button>
//               <button className="w-full text-center py-2 capitalize bg-blue-900/30 bg-gradient rounded-lg ring-1 flex justify-center items-center" onClick={() => handleSubmitChange('published')} type='submit'>{editorId ? <>update</> : <>publish</>}</button>
//             </div>
//             {/* submit buttom */}



//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Page;
