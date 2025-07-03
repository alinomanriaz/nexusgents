// "use client"
// import { motion } from 'framer-motion'
// import React from 'react'
// import Button from './Button'


// const Slidervirtical = () => {
//     return (
//         <>
//             <div className=' w-full h-fit flex justify-center items-center '>
//                 <div className='w-11/12 h-fit flex flex-col md:flex-row justify-center items-center '>
//                     <div className='md:w-1/2 w-full '>
//                         <div className='space-y-6 md:pr-16'>
//                             <h1 className='w-full dark:text-white tracking-tight text-slate-900 font-extrabold md:text-4xl text-3xl '>We Strive to Go Beyond Expectations and Achieve Unmatched Results</h1>
//                             <p className='text-md text-gray-600 dark:text-gray-500 leading-6 tracking-wide'>We are committed to delivering exceptional quality and ensuring customer satisfaction in every project. With a focus on innovation and adaptability, we stay ahead of the curve in the dynamic digital landscape. Our dedication to timely delivery ensures that your needs are not just met, but surpassed, helping us build lasting, trusted relationships. Count on us to go above and beyond, exceeding your expectations at every stage.</p>
//                             {/* <button className='w-1/3 py-2 btncolor dark:primarycolor rounded-lg text-white'>Live demo</button> */}
//                             <Button className={'bg-transparent border border-neutral-700/80 rounded-md'} btname={'Get Started'}/>
//                         </div>
//                     </div>
//                     <div className='md:w-1/2 w-full h-fit flex justify-end items-center'>
//                         <div className='flex md:justify-between items-center'>
//                             <div className=' h-[20rem] overflow-hidden myblurbordergradient'>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                         <div className='md:px-7 px-4'>
//                             <div className=' h-[30rem] overflow-hidden myblurbordergradient'>
//                                 <motion.div
//                                     initial={{ y: "-100%" }}
//                                     animate={{ y: 0 }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: "-100%" }}
//                                     animate={{ y: 0 }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                         <div className=''>
//                             <div className=' h-[40rem] overflow-hidden myblurbordergradient '>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='sm:imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Slidervirtical
