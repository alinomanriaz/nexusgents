import React, { useState } from 'react'

const Questions = () => {
  const [active, setActive] = useState(0)
  const Ques = [
    {
      Q: ' - What services do you offer?',
      ans: 'We offer a wide range of services including web development, SEO, digital marketing, graphic design, app development, and content writing — all customized to your needs.'
    },
    {
      Q: ' - How long does it take to complete a project?',
      ans: 'Project timelines vary based on complexity and requirements, but we always set clear deadlines and deliver on time without compromising quality.'
    },
    {
      Q: ' - Do you provide ongoing support after project delivery?',
      ans: 'Yes, we offer maintenance, updates, and long-term support to ensure your project continues to perform smoothly.'
    },
    {
      Q: ' - Can you help improve my existing website or app?',
      ans: 'Absolutely! We can audit your current platform, identify issues, and enhance design, speed, SEO'
    },
    {
      Q: ' - Do you work with international clients?',
      ans: 'Yes, we work with clients from around the world and have experience managing projects remotely with clear communication and reliable delivery.'
    },
    {
      Q: ' - What industries do you serve?',
      ans: `We serve a wide range of industries including e-commerce, education, healthcare, real estate, fashion, and technology — adapting to each client's specific needs.`
    },
    {
      Q: ' - Is your pricing fixed or flexible?',
      ans: 'Our pricing is flexible and based on project scope, complexity, and timeline. We offer transparent quotes with no hidden charges.'
    },
    {
      Q: ' - Will I be involved in the design and development process?',
      ans: 'Yes! We value your input at every stage. From concept to launch, we work closely with you to ensure the final product aligns with your vision.'
    },
    {
      Q: ' - Do you offer custom packages or bundled services?',
      ans: 'Yes, we can create custom packages based on your specific needs — combining multiple services like web design, SEO, and social media management at a better value.'
    },
  ]
  return (
    <section className='flex flex-col justify-center items-center w-full '>
      <div className='w-11/12 h-full flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-center items-center w-full space-y-6 mb-10'>
                    <div className='text-5xl font-semibold '>Frequently Asked Questions</div>
                    <div className='text-gray-500 w-[70%] text-center'>
                        Here are some of the most common queries our clients ask — covering our services, process, pricing, and support. If you don’t find your question here, feel free to contact us anytime.
                    </div>
                </div>
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
