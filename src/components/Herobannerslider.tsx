// "use client"
// import { motion } from 'framer-motion'
// import React from 'react'


// const Herobannerslider = () => {
//     return (
//         <>
//             <div className='w-full h-fit flex justify-center items-center md:-mt-20 '>
//                 <div className='w-11/12 h-fit flex justify-center items-center '>
//                     <div className=' w-full h-fit flex justify-center items-center'>
//                         <div className=' hidden md:flex'>
//                             <div className=' h-[40rem] overflow-hidden myblurbordergradient '>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                         <div className=' hidden md:flex px-7'>
//                             <div className=' h-[30rem] overflow-hidden myblurbordergradient'>
//                                 <motion.div
//                                     initial={{ y: "-100%" }}
//                                     animate={{ y: 0 }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: "-100%" }}
//                                     animate={{ y: 0 }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                         <div className='flex md:justify-between items-center'>
//                             <div className=' h-[20rem] overflow-hidden myblurbordergradient'>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='w-full rounded-xl '
//                                     />
                                    
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='w-full rounded-xl '
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='w-full rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='w-full rounded-xl '
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                         <div className=' hidden md:flex px-7'>
//                             <div className=' h-[30rem] overflow-hidden myblurbordergradient'>
//                                 <motion.div
//                                     initial={{ y: "-100%" }}
//                                     animate={{ y: 0 }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: "-100%" }}
//                                     animate={{ y: 0 }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                             </div>
//                         </div>
//                         <div className=' hidden md:flex '>
//                             <div className=' h-[40rem] overflow-hidden myblurbordergradient '>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />

//                                 </motion.div>
//                                 <motion.div
//                                     initial={{ y: 0 }}
//                                     animate={{ y: "-100%" }}
//                                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
//                                     className='flex flex-shrink-0 justify-around py-2 space-y-4 flex-col items-center'>
//                                     <img
//                                         src={'/marketing1.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl '
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
//                                     />
//                                     <img
//                                         src={'/marketing2.avif'}
//                                         alt='image'
//                                         className='imgh mbviewimgh rounded-xl'
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

// export default Herobannerslider
