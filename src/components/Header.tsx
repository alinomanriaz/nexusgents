'use client'
import React from 'react'
import logo from '../../public/assets/images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { GoChevronDown } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import Submenu from './Submenu'
import { FormSubmitButton } from './Button'



const Header = () => {

  const path = usePathname()
  const [isActive, setIsactive] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  // const [loading, setLoading] = useState(true)

  console.log({ isActive: isActive })

  return (
    <>
      <header className='sticky top-0 z-50 text-sm bg-white dark:bg-transparent backdrop-blur-md  shadow-md'>
        <div className='flex w-full items-center justify-between md:flex-row md:px-8 px-2'>
          <div className='flex justify-center items-center text-center '>
            <div className='mr-8'>
              <Link href="/" className='flex items-center font-medium text-lg md:text-xl'><Image className="w-8 h-10 m-2" src={logo} alt="logo" ></Image>NexusGen</Link>
            </div>
            <div className={`${isActive ? '' : '-translate-y-full'} absolute bg-slate-300  md:bg-transparent w-full -top-0 left-0 rounded-b-2xl flex justify-center md:justify-normal transition ease-out duration-200 -z-50 md:z-0 md:translate-y-0 md:w-fit md:relative shadow-md md:shadow-none`}>
              <div className=' w-96 md:flex md:w-fit'>
                <nav className='mt-20 mb-10 flex flex-col space-y-1 md:space-y-0 justify-center md:m-0 md:flex-row md:justify-normal md:text-center md:my-0 md:gap-2 md:text-sm'>

                  <Link onClick={() => { setIsactive(!isActive) }} onMouseEnter={() => setSubMenu(false)} className={`${path === "/" ? "bg-blue-900/20" : ""} navlink flex flex-row items-center w-full py-3 px-8 rounded-md duration-200 hover:bg-blue-900/20`} href="/">Home</Link>
                  {/* <Link onClick={() => { setIsactive(!isActive) }} onMouseEnter={() => setSubMenu(false)} className={`${path === "/blog" ? "bg-blue-900/20" : ""} navlink flex flex-row items-center w-full py-3 px-8 rounded-md duration-200 hover:bg-blue-900/20`} href="/blog">Blog</Link> */}
                  <div onClick={() => { setIsactive(!isActive); setSubMenu(true) }} >
                    <div onMouseEnter={() => setSubMenu(true)} className={`${path.startsWith('/services') ? "bg-blue-900/20" : ""} navlink flex flex-row items-center w-full py-3 px-8 rounded-md duration-200 hover:bg-blue-900/20`} >Services<GoChevronDown /></div>
                  </div>

                  <Link onClick={() => { setIsactive(!isActive) }} onMouseEnter={() => setSubMenu(false)} className={`${path === "/client" ? "bg-blue-900/20" : ""} navlink flex flex-row items-center w-full py-3 text-nowrap px-8 rounded-md duration-200 hover:bg-blue-900/20`} href="/about">Our Client</Link>
                  <Link onClick={() => { setIsactive(!isActive) }} onMouseEnter={() => setSubMenu(false)} className={`${path === "/about" ? "bg-blue-900/20" : ""} navlink flex flex-row items-center w-full py-3 px-8 rounded-md duration-200 hover:bg-blue-900/20`} href="/about">About</Link>
                  <Link onClick={() => { setIsactive(!isActive) }} onMouseEnter={() => setSubMenu(false)} className={`${path === "/contact" ? "bg-blue-900/20" : ""} navlink flex flex-row items-center w-full py-3 px-8 rounded-md duration-200 hover:bg-blue-900/20`} href="/contact">Contact</Link>
                </nav>
              </div>
            </div>
          </div>
          <ThemeToggle />
          <div>


            {/* 
            {(!cuser) ? */}
            <div className='hidden md:flex justify-center items-center space-x-4 text-sm'>

              <Link href={'/contact'}><FormSubmitButton className={'bg-[#0f172a] active:scale-105 text-white dark:bg-gradient hidden md:flex rounded-md'} btname={'Get Started'} /></Link>
            </div>
            {/* : <LogoutButton /> */}



            <div className='m-2 flex md:hidden'>
              <IoClose onClick={() => { setIsactive(!isActive) }} className={`${isActive ? 'flex' : 'hidden'} size-6`} />
              <CgMenuRight onClick={() => { setIsactive(!isActive) }} className={`${isActive ? 'hidden' : 'flex'} size-6`} />
            </div>
          </div>

        </div>


      </header>
      {
        subMenu && <Submenu close={() => setSubMenu(false)} />
      }

    </>
  )
}

export default Header
