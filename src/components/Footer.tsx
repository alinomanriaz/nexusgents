import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/images/logo.svg'
const Services = [
    {
        label: 'Privacy and Policy',
        link: '#'
    },
    {
        label: 'Terms and Conditions',
        link: '#'
    },
    {
        label: 'About Us',
        link: '#'
    },
    {
        label: 'Contact Us',
        link: '#'
    },
    {
        label: 'Sitemap',
        link: '#'
    },
    {
        label: 'Portfolio',
        link: '#'
    },
    {
        label: 'Case Study',
        link: '#'
    },
]
const Information = [
    {
        label: 'Digital Marketing',
        link: '#'
    },
    {
        label: 'Terms and Conditions',
        link: '#'
    },
    {
        label: 'Graphic Designing',
        link: '#'
    },
    {
        label: 'Web Development',
        link: '#'
    },
    {
        label: 'Mobile Apps',
        link: '#'
    },
    {
        label: 'SEO',
        link: '#'
    }
]
const Contact = [
    {
        label: 'Digital Marketing',
        link: '#'
    },
    {
        label: 'Terms and Conditions',
        link: '#'
    }
]

const Footer = () => {
    return (
        <>
            <footer className=' h-fit rounded-t-xl mt-5 sm:pt-0 relative overflow-hidden flex justify-center bg-darkmodebtncolor flex-col items-center'>

                <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-1/2 h-24 bg-gradient'></div>
                <div className='border-t border-neutral-700/80 w-11/12 border-b flex justify-center'>
                    <div className='flex-col w-full flex justify-between items-start md:flex-row my-16'>
                        <div className='py-10 px-4 md:w-[33%] md:p-4 text-sm w-[40%] flex justify-center items-center'>
                            <div className='md:pb-8'>
                                <div className=''>
                                    <Link href="/" className="flex items-center font-medium text-lg md:text-xl text-white"><Image className="w-8 h-10 m-2" src={logo} alt="logo" priority></Image>Nexusgen</Link>
                                </div>
                                <p className='my-3 text-neutral-400 dark:text-neutral-400'>Build beautiful, functional websites, without writing code</p>
                                <p className='text-white'>Made my Ali</p>
                            </div>
                        </div>
                        <div className='flex justify-center py-6 '>
                            <div className='grid grid-cols-2 gap-x-28 md:gap-x-0 gap-y-10 text-sm md:px-6 md:flex md:flex-row md:space-x-16'>
                                <div className=''>
                                    <h2 className='pb-2 text-2xl font-extrabold text-white'>Our Services</h2>
                                    {Services.map((data, index) => (
                                        <div key={index} className='py-1'>
                                            <Link href={'/'} className='text-neutral-400 '>{data.label}</Link>
                                        </div>
                                    ))}
                                </div>
                                <div className=''>
                                    <h2 className='pb-2 text-2xl font-extrabold text-white'>Information</h2>
                                    {Information.map((data, index) => (
                                        <div key={index} className='py-1'>
                                            <Link href={'/'} className='text-neutral-400 py-1'>{data.label}</Link>
                                        </div>
                                    ))}
                                </div>
                                <div className=' md:flex flex-col hidden'>
                                    <h2 className='pb-2 text-2xl font-extrabold text-white'>Contact Us</h2>
                                    {Contact.map((data, index) => (
                                        <div key={index} className='py-1'>
                                            <Link href={'/'} className='text-neutral-400 py-1'>{data.label}</Link>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='my-4 mx-auto text-sm text-neutral-400'>© 2024 Astra AI INC. All rights reserved.</div>
            </footer>
        </>
    )
}

export default Footer
