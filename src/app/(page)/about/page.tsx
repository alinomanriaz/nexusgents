import Pagenamecontainer from '@/components/Pagenamecontainer'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full'>
          <Pagenamecontainer pageName={'About Us'} />
        </div>
        <div className=' w-[90%] my-4'>
          <p className='my-8 '>At Nexusgen, we specialize in building digital solutions that move your business forward. Whether you are a startup, small business, or an enterprise, our team of experts is here to transform your ideas into results with cutting-edge technology and creative strategy.</p>

          <h5 className='font-bold text-2xl'>We offer a full suite of services including:</h5>

          <p className='my-8'>Website Development – From clean, modern websites to custom web applications, we build fast, scalable, and responsive experiences that represent your brand with precision.</p>

          <p className='my-8'>UI/UX & Graphic Design – Our designers craft user-first, visually compelling designs that not only look great but also function flawlessly across devices.</p>

          <p className='my-8'>SEO & Digital Marketing – What’s the point of a great product if no one can find it? We help businesses rank higher, drive organic traffic, and increase conversions with strategic SEO and marketing campaigns.</p>

          <p className='my-8'>Mobile App Development – We build intuitive and powerful mobile applications for iOS and Android, helping you reach your customers wherever they are.</p>

          <h4 className='font-bold text-2xl'>💡 Why Choose Us?</h4>
          <p className='my-8'> We are not just service providers — we’re your digital partners. Our approach is collaborative, transparent, and tailored to your goals. From concept to launch and beyond, we’re with you every step of the way.</p>

          <p className='my-8 text-xl font-bold'>Let’s build something remarkable together.</p>
        </div>
      </div>
    </div>
  )
}

export default Page
