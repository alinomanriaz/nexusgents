import React from 'react';

interface PagenameContainerProps {
  pageName: string;
}

const Pagenamecontainer: React.FC<PagenameContainerProps> = ({ pageName }) => {
  return (
    <>
      <div className='-z-50 flex justify-center items-center w-full sm:h-60 h-36 bg-blue-900/5 relative overflow-hidden shadow-sm'>
        <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-16 bg-gradient'></div>
        <div className="absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[80vh]" />
        <h1 className='leading-tight sm:text-4xl text-xl text-center dark:text-slate-300 tracking-tight text-slate-800 font-extrabold'>
          {pageName}
        </h1>
      </div>
    </>
  );
};

export default Pagenamecontainer;
