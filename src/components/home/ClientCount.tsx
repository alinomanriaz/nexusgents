import React from 'react'

const ClientCount = () => {
    const satisfycustomer = [
    {
      mainheading: '500+',
      subheading: 'Projects Delivered',
      text: 'We’ve successfully completed hundreds of client projects globally.'
    },
    {
      mainheading: '100%',
      subheading: 'Client Satisfaction',
      text: 'Client trust is our asset — we never compromise on quality.'
    },
    {
      mainheading: '24/7',
      subheading: 'Support',
      text: 'Our support team is always ready to help you anytime.'
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
                  <div className='text-sm text-gray-500'>{data.text}</div>
                </div>
              ))
            }
            </div>
            <div className='text-sm text-gray-500 w-[50%]'>
                We offer a wide range of professional services to help your business grow and succeed online.
            </div>
          </div>
        </section>
  )
}

export default ClientCount
