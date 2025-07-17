"use client";
import React, { useState } from "react";
// import { AiOutlineShop } from "react-icons/ai";
// import { RiMailSendFill } from "react-icons/ri";
// import { BsFillSendFill } from "react-icons/bs";
// import Buttons from "@/components/buttons";
// import Pagenamecontainer from "@/components/pagenamecontainer";
import { IoSend } from "react-icons/io5";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { Clock, Globe, Mail, Phone } from "lucide-react";
import Inputbox from "@/components/InputBox";
import Pagenamecontainer from "@/components/Pagenamecontainer";
import {FormSubmitButton} from "@/components/Button";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  // const pathname = useRouter();

  const onchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

const onsubmit = async () => {
  try {
    setLoader(true);
    const response = await axios.post("/api/contact-email", form);
    if (response.status === 200) {
      alert("Info sent successfully");
    } else {
      alert("Error in sending form");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong!");
  } finally {
    setLoader(false);
  }
};
  return (
    <>
      <main className="h-fit w-full flex flex-col justify-center items-center ">
        <Pagenamecontainer pageName={"Contact Us"} />
        <section className="w-11/12  py-16 flex md:flex-row flex-col justify-center items-center ">
          <div className="md:w-1/2 ">
            <div className="space-y-6">
              <div className="flex ">
                <div className="w-12 h-12 mr-4 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600 " />
                </div>
                <div className="max-w-[500px]">
                  <h1 className="text-xl font-semibold">Address</h1>
                  <p className="text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide">
                    123 Business<br />
                    Avenue Suite 456 San <br />
                    Francisco, CA 94107
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-12 h-12 mr-4 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600 " />
                </div>
                <div className="max-w-[500px]">
                  <h1 className="text-xl font-semibold">Phone</h1>
                  <p className="text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide">
                    +1 (415) 555-0123
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-12 h-12 mr-4 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600 " />
                </div>
                <div className="max-w-[500px]">
                  <h1 className="text-xl font-semibold">E-Mail</h1>
                  <p className="text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide">
                    contact@company.com
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-12 h-12 mr-4 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 " />
                </div>
                <div className="max-w-[500px]">
                  <h1 className="text-xl font-semibold">Business Hours</h1>
                  <p className="text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide">
                    Friday: 9:00 AM - 6:00 PM <br />
                    
                    Saturday: 10:00 AM - 4:00 PM<br />
                    
                    Sunday: Closeds
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full py-10 flex justify-center flex-col items-center px-8 md:pl-16">
            <div className="space-y-4 py-8">
              <h1 className="leading-tight text-3xl text-center dark:text-slate-300 tracking-tight text-slate-900 font-extrabold">
                Ready to get started?
              </h1>
              {/* <p className='text-md text-center text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p> */}
            </div>
            <form className="space-y-4">
              <Inputbox
                onChangeHandler={onchange}
                name="name"
                // required="required"
                type="text"
                className="w-full dark:bg-white/5"
                placeholder="Enter your name"
              />
              <Inputbox
                onChangeHandler={onchange}
                name="email"
                // required={"required"}
                type="email"
                placeholder="Enter your email"
                className="w-full dark:bg-white/5"
              />
              <Inputbox
                onChangeHandler={onchange}
                name="number"
                type="tel"
                placeholder="03123456789"
                // pattern="[0-9]{4}-[0-9]{7}"
                className="w-full dark:bg-white/5"
                // required
              />
              <textarea
                onChange={(e) => onchange(e)}
                placeholder="Submit your idea"
                name="message"
                id=""
                className={`w-full h-48 border dark:border-neutral-400/20 rounded-lg dark:text-white/50 py-2 px-3 dark:placeholder:text-white/30 focus:ring-1 focus:ring-inset dark:focus:ring-white/10 outline-none focus-visible:border-neutral-500/50 border-gray-800/30 placeholder:text-gray-400 text-black/50 focus:ring-blue-600 dark:bg-white/5`}
              ></textarea>
              <FormSubmitButton
                onSubmitHandler={onsubmit}
                loader={loader}
                className={
                  " flex justify-center items-center gap-x-2 text-white dark:bg-blue-900/20 bg-darkmodebtncolor w-full rounded-lg"
                }
                btname={"Send"}
                iicon={<IoSend className="animate-pulse size-5 " />}
              />
            </form>
          </div>

          {/* <div className='flex justify-around md:w-10/12 my-10 md:my-24 md:flex-row flex-col'>
            <div className='md:w-1/3 w-full flex flex-col justify-center items-center md:items-start'>
              <div className=''><RiMailSendFill className='size-44 text-blue-800 ' /></div>
              <h1 className='text-3xl font-extrabold bg-gradient bg-clip-text text-transparent'>Get in Touch</h1>
              <p className='text-sm my-10 md:my-4 md:px-1 px-4'>Quality is the heart of everything wo do and we are committed to provide you</p>
            </div>
            <div className='md:w-1/3 w-full gap-5 flex flex-col'>
              <Inputbox type='text' placeholder='Name' />
              <Inputbox type='email' placeholder='Email' />
              <Inputbox type="tel" placeholder="03123456789" pattern="[0-9]{4}-[0-9]{7}" required />
              <Inputbox />
              <Buttons className={'bg-gradient flex justify-center items-center rounded-lg '} btname='Send ' iicon={<BsFillSendFill className='size-4 ml-2' />}></Buttons>
            </div>

          </div>
          <p className='mb-20 hidden md:flex w-full justify-center items-center'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15263.998411496943!2d-73.97467710489592!3d40.67303616686387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1725458656412!5m2!1sen!2s" height="350" className='mapp rounded-xl w-11/12' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p> */}
        </section>
      </main>
    </>
  );
};

export default Page;
