import React from 'react'

const ClientCount = () => {
    const satisfycustomer = [
    {
      mainheading: '5.0',
      subheading: 'GOOGLE REVIEW',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
      mainheading: '450+',
      subheading: 'SATISFIED CLIENTS',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
      mainheading: '1200+',
      subheading: 'COMPLETED PROJECTS',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }

  ]
  return (
    <section className='flex flex-col justify-center items-center h-fit w-full bg-darkmodebtncolor text-white py-16'>
          <div className='w-11/12  flex flex-col md:flex-row justify-evenly items-center'>

            <div className='flex justify-evenly w-full items-center'>
                {
              satisfycustomer.map((data, index) => (
                <div key={index} className='  rounded-3xl w-[200px] text-center'>

                  <div className='font-extrabold text-[30px]'>{data.mainheading}</div>
                  <div className='font-bold text-sm'>{data.subheading}</div>
                  <div className='text-sm text-gray-600'>{data.text}</div>
                </div>
              ))
            }
            </div>
            <div className='text-sm text-gray-600 w-[50%]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi incidunt, quaerat nostrum et quasi maxime.
            </div>
          </div>
        </section>
  )
}

export default ClientCount
