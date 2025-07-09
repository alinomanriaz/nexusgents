import React, { useState } from 'react'
import { GradientTitle, Title } from '../Titles'

const Questions = () => {
  const [active, setActive] = useState(0)
  const Ques = [
    {
      Q: ' - What is our Services ?',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis ad ea. Rem, recusandae sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis ad ea. Rem, recusandae sint'
    },
    {
      Q: ' - What is our Services ?',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis ad ea. Rem, recusandae sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis ad ea. Rem, recusandae sint'
    },
    {
      Q: ' - What is our Services ?',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis ad ea. Rem, recusandae sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis ad ea. Rem, recusandae sint'
    },
  ]
  return (
    <section className='flex flex-col justify-center items-center w-full '>
      <div className='w-11/12 h-full flex flex-col justify-between items-center'>
        <GradientTitle text='Features' />
        <Title title='Discover our powerful features' className='mb-8 mt-2' />
        <div className='w-[70%] h-full space-y-2'>
          {
            Ques.map((Ques, index) => (
              <div key={index} onClick={()=>setActive(index)} className='card-style rouned-md p-4 transition-all duration-150 ease-in'>
                <div className='font-bold'>{Ques.Q}</div>
                <div className={`${active===index?'flex':'hidden'} transition-all duration-150 ease-in text-gray-500 py-2`}>{Ques.ans}</div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Questions
