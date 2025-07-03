import React from "react"


const Blogitemskeleton = () => {
    return (
        <>
            <div className="w-[300px] rounded-xl mx-auto ring-1 ring-slate-200/10">
                <div className="bg-slate-700/10 shadow-lg h-[380px] relative w-full flex flex-col justify-between px-2 pt-2 rounded-xl">
                    <div>
                        <div className="relative flex justify-center items-center">
                            <div className="animate-pulse w-[280px] rounded-lg bg-slate-300 h-[200px]">
                            </div>

                        </div>
                        <div className="flex w-full flex-col justify-between space-y-1 mt-2">
                                <span className="w-[120px] h-[30px] animate-pulse bg-slate-300 rounded-xl text-white font-sm pr-4 px-2">
                                </span>
                            <h1 className="w-[250px] h-[30px] animate-pulse bg-slate-400/50 rounded-lg "></h1>
                            <p className="w-[250px] text-neutral-400 h-[50px] rounded-lg animate-pulse bg-slate-300 dark:text-gray-500 text-sm line-clamp-2 text-ellipsis">
                            </p>
                        </div>
                    </div>
                    <div className='border-slate-300 dark:border-gray-800 text-neutral-400 px-1 dark:text-gray-500 border-t-2 text-sm '>
                        <div className=' flex h-full py-1 space-x-2 justify-start items-center '>
                            <span className='text-sm w-[200px] h-[30px] animate-pulse bg-slate-300 rounded-lg'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogitemskeleton
