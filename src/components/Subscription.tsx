'use client'
import React, { useState } from 'react'
// import { Title } from './titles'
import axios from 'axios'
import Button from './Button'
import Inputbox from './InputBox'

const Subscription = () => {
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log({ email: email })
        setEmail(value)
    }
    const onsubmit = async () => {
        try {
            setLoader(true)
            console.log({ email: email })
            const response = await axios.post('/api/user/emailsubscription', { email })
            if (response.status === 200) {
                alert('email added successfully')
                setLoader(false)
            } else {
                alert('email saving error')
                setLoader(false)
            }
            setLoader(false)

        } catch (error) {
            console.error('Email saving API error:', error);
            alert('Something went wrong while saving the email');
            setLoader(false)
        }
    }
    return (
        <section className='flex justify-center items-center '>
            <div className='flex bg-darkmodebtncolor shadow-md relative flex-col h-96 justify-center md:px-20 items-center w-[90%] border rounded-xl px-5 border-neutral-400/10 py-8 overflow-hidden' >
                <div className='absolute -bottom-28 rounded-full blur-[90px] w-1/2 h-24 bg-gradient'></div>
                <div className='md:w-[100%] w-full flex flex-col md:gap-4 gap-1 justify-center items-center '>
                    <h1 className='md:text-5xl text-2xl text-center text-white font-bold' >Get notified when we’re launching</h1>
                    <p className='text-gray-500 text-sm md:w-[500px] w-10/12 text-center mt-4 md:text-base md:mb-0'>Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.</p>
                </div>
                <div className='sm:w-[70%] md:w-[50%] flex-col justify-between text-center space-y-6 0 w-full'>
                    <div className='w-full mt-12 flex flex-col gap-3 md:flex-row justify-between items-center text-center md:space-x-2'>
                        <Inputbox
                            onChangeHandler={onChange}
                            type='email'
                            className='w-full bg-white/5 text-white/50'
                            placeholder='Enter your email' />
                        <Button
                            onSubmitHandler={onsubmit}
                            loader={loader}
                            btname='Notify Me'
                            className='md:w-48 w-full bg-white text-black font-medium border border-neutral-700/80 rounded-md' />
                    </div>
                    <div>
                        <p className='text-sm text-white/40'>By subscribing you agree with our Privacy Policy </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscription
