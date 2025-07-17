import React from 'react'


interface ContentItem {
  title: string;
  description: string;
}

// Props type for the component
interface DetailContentProps {
  content: ContentItem[];
}

const DetailContent = ({ content }: DetailContentProps) => {
  return (
    <section className='flex flex-col justify-center items-center w-full '>
      <div className='w-11/12 h-full flex flex-col justify-between items-center '>
        <div className='flex flex-col w-full space-y-8'>
          {
            content.map((data, index) => (
              <div key={index} className='flex flex-col w-full space-y-8'>
                <div className='text-5xl font-semibold'>{data.title}</div>
                <p className='text-md text-gray-500'>{data.description}</p>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default DetailContent
