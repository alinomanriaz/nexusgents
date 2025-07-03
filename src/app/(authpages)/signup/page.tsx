'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";


const Page = () => {
    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [loader,setLoader]=useState(false)
    const [error,setError]=useState('')
    const Router=useRouter()

    const onchangehandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }

    const onsubmithandler=async()=>{
        setLoader(true)
        setError('')

        try {
            await axios.post('/api/user/signup',formdata)
            Router.push('/dashboard')
            console.log('data send through post api sucessfully')
        } catch (error) {
            console.error('data send post api not working', error)
            setError('check your entered data')
            setLoader(false)

        }
    }

    return (
        <>
            <div className=' relative w-full h-screen flex justify-center items-center'>
                <div className='w-80 h-80 -z-10 absolute bg-blue-900 blur-[200px]'></div>
                <div className='w-[30%] pb-24 relative bg-blue-950/50 rounded-xl p-8 flex flex-col justify-center items-center space-y-6'>
                    <div className='capitalize text-blue-800 text-2xl font-semibold '>create account</div>
                    <form action="" onSubmit={onsubmithandler} className='flex flex-col justify-center items-center space-y-4 w-full' >
                        <div className='w-full relative flex justify-start items-center'>
                            <div className='absolute'>
                                <CiUser className='mx-3 text-blue-400 size-5' />
                            </div>
                            <input onChange={onchangehandler} className='pl-10 py-2 ring-blue-900 ring-1 focus:ring-2 rounded-lg bg-gray-800/50 placeholder:text-slate-200/40 focus:outline-none text-white/40 w-full' name='username' type="text" placeholder='Enter Name' />
                        </div>
                        <div className='w-full relative flex justify-start items-center'>
                            <div className='absolute'>
                                <HiOutlineMail className='mx-3 text-blue-400 size-5' />
                            </div>
                            <input onChange={onchangehandler} className='pl-10 py-2 ring-blue-900 ring-1 focus:ring-2 rounded-lg bg-gray-800/50 placeholder:text-slate-200/40 focus:outline-none text-white/40 w-full' type="email" name='email' placeholder='Enter Email' />
                        </div>
                        <div className='w-full relative flex justify-start items-center'>
                            <div className='absolute'>
                                <RiLockPasswordLine className='mx-3 text-blue-400 size-5' />
                            </div>
                            <input onChange={onchangehandler} className='pl-10 py-2 ring-blue-900 ring-1 focus:ring-2 rounded-lg bg-gray-800/50 placeholder:text-slate-200/40 focus:outline-none text-white/40 w-full' name='password' type="password" placeholder='Enter Password' />
                        </div>
                        <button type='submit' className='w-full bg-blue-800 rounded-lg py-2'>{loader?<span className="loader "></span>:<>Sign Up</>}</button>
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                    </form>
                    <div className='text-white/40 text-sm py-2 text-center rounded-b-lg bottom-0 w-full absolute bg-gray-800/80 '>Already have an account?<Link className='text-blue-700 px-2' href={'/signin'}>Log in</Link></div>
                </div>
                
            </div>
        </>
    )
}

export default Page
