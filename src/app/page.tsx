"use client";
import lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';
import animationData from './utils/animation.json';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import SwiperComponent from './components/SwiperComponent';
import Header from './components/Header';

export default function Home() {

  const animationContainer = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const homeSectionRef = useRef<HTMLElement>(null);
  const serviceSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  const scrollToAboutSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToHomeSection = () => {
    homeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServiceSection = () => {
    serviceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactSection = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (animationContainer.current && typeof window !== 'undefined') {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy(); // Cleanup
    }
  }, []);

  return (
    <>
      <header className="container">
        <Header scrollToAbout={scrollToAboutSection} scrollToHome={scrollToHomeSection} scrollToService={scrollToServiceSection} scrollToContact={scrollToContactSection} />
      </header>
      <main className="container">
        <div className='mb-14 xs:mb-0'>
          <section key="Home" id="Home" ref={homeSectionRef}>
            <div className='pb-5'>
              <h1 className='text-2xl xs:hidden font-semibold text-white'>Logo</h1>
            </div>
            <div className='w-[100%] overflow-hidden'>
              <div className='scale-150 md:scale-125 lg:scale-100 sm:scale-125 left-0 right-0 flex justify-center text-center object-center z-20' ref={animationContainer}></div>
            </div>

            <div className='flex justify-center flex-col items-center pb-3 pt-14 sm:pt-10'>
              <h1 className='text-3xl md:text-4xl xl:text-5xl xs:tracking-wider pb-3 text-transparent text-nowrap font-bold bg-clip-text bg-gradient-to-b from-white to-gray-400'>
                Welcome to Bitewi
              </h1>
              <h3 className="text-center xs:-tracking-tight pb-3 text-gray-100 opacity-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas alias doloremque recusandae aut? Assumenda accusantium, ullam amet mollitia reprehenderit eaque blanditiis enim officiis similique voluptas. </h3>
            </div>
            <div className=' border-b border-t swiper-border border-gray-300 py-6'>
              <SwiperComponent />
            </div>
          </section>
          <section key="About" id="About" className='md:flex md:flex-row-reverse' ref={aboutSectionRef}>
            <div className='relative flex justify-center'>
              <img className="z-20 relative object-contain object-bottom xl:w-1/2" src="/dev.webp" alt="" />
              <div className=' w-[90%] h-20 custom-gradient rounded-full blur-2xl overflow-hidden absolute z-10 bottom-0'></div>
            </div>
            <div className='mt-8 sm:mt-16'>
              <h1 className='text-center xs:text-left tracking-wide text-xl font-semibold text-white z-20 sm:text-2xl'>We help drive your business forward faster</h1>
              <h3 className='text-white text-left text-sm font-light pt-3 xl:pt-10 xl:leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.</h3>
              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-3 sm:pt-5 gap-2 xs:gap-3'>
                <div className='relative shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-3 py-3'>
                  <div className='flex flex-col justify-center items-center '>
                    <RiSecurePaymentLine className='z-20' size={28} />
                    <h2 className='text-md font-semibold pt-2 z-20'>Secure</h2>
                    <p className='text-xs pt-2 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>

                  <div className='absolute bottom-0 left-0 rotate-45 custom-gradient blur-xl rounded-full w-5 h-32 '>

                  </div>
                </div>

                <div className='relative shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-3 py-3'>
                  <div className='flex flex-col justify-center items-center '>
                    <RiSecurePaymentLine className='z-20' size={28} />
                    <h2 className='text-md font-semibold pt-2 z-20'>Secure</h2>
                    <p className='text-xs pt-2 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>

                  <div className='absolute bottom-0 left-0 rotate-45 custom-gradient blur-xl rounded-full w-5 h-32 '>

                  </div>
                </div>

                <div className='relative shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-3 py-3'>
                  <div className='flex flex-col justify-center items-center '>
                    <RiSecurePaymentLine className='z-20' size={28} />
                    <h2 className='text-md font-semibold pt-2 z-20'>Secure</h2>
                    <p className='text-xs pt-2 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>

                  <div className='absolute bottom-0 left-0 rotate-45 custom-gradient blur-xl rounded-full w-5 h-32 '>

                  </div>
                </div>

                <div className='relative shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-3 py-3'>
                  <div className='flex flex-col justify-center items-center '>
                    <RiSecurePaymentLine className='z-20' size={28} />
                    <h2 className='text-md font-semibold pt-2 z-20'>Secure</h2>
                    <p className='text-xs pt-2 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>

                  <div className='absolute bottom-0 left-0 rotate-45 custom-gradient blur-xl rounded-full w-5 h-32 '>

                  </div>
                </div>

              </div>
            </div>
          </section>

          <section key="Services" id="Services" className='xl:flex xl:flex-row-reverse servicecontainer mt-8 sm:mt-16 xl:py-10' ref={serviceSectionRef}>

            <div className='xl:w-1/2'>
              <h1 className='text-center xs:text-left tracking-wide text-xl font-semibold pt-6 xl:pt-0 text-white z-20 sm:text-2xl'>Our Services</h1>
              <h3 className='text-white text-left text-sm font-light pt-3 xl:leading-relaxed xl:pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.</h3>

            </div>


            <div className='pt-3 xl:pt-0 flex justify-center items-center xl:mr-3'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 xl:grid-cols-2 xs:gap-3'>

                <div className='shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-6 py-6'>
                  <h2 className='text-lg pb-3 font-semibold'>Lorem ipsum dolor</h2>
                  <p className='text-xs pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className='py-2'>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>

                  </div>

                  <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

                <div className='shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-6 py-6'>
                  <h2 className='text-lg pb-3 font-semibold'>Lorem ipsum dolor</h2>
                  <p className='text-xs pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className='py-2'>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                  </div>
                  <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-6 py-6'>
                  <h2 className='text-lg pb-3 font-semibold'>Lorem ipsum dolor</h2>
                  <p className='text-xs pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className='py-2'>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>

                  </div>

                  <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

                <div className='shadow-custom rounded-md bg-opacity-5 bg-white overflow-hidden border-t border-l border-white border-opacity-50 backdrop-blur-md text-white px-6 py-6'>
                  <h2 className='text-lg pb-3 font-semibold'>Lorem ipsum dolor</h2>
                  <p className='text-xs pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className='py-2'>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className='flex items-center pb-3'>
                      <div className='mr-3'><FaRegCircleCheck color='#8CABFF' /></div>
                      <h3 className='text-xs leading-tight'>Lorem ipsum dolor sit amet</h3>
                    </div>

                  </div>

                  <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

              </div>

            </div>

          </section>

          <section key="Contact" id="Contact" ref={contactSectionRef} className='border rounded-md py-5 px-5 mt-5 xs:mt-8 sm:mt-10 max-w-md mx-auto flex justify-center flex-col items-center'>
            <h1 className='text-2xl text-center xs:text-left text-white xs:border-l xs:rounded-full xs:px-1 font-semibold opacity-90 mb-3'>Contact Us</h1>
            <p className='text-white text-center xs:text-left pb-3 text-sm xs:tracking-wide'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur in quisquam dolorum, illo recusandae impedit quam culpa officiis facere?</p>
            <form className='flex flex-col w-full mt-3'>


              <div className="relative h-10 w-full mb-3">
                <input
                  className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Input Success
                </label>
              </div>

              <div className="relative h-10 w-full mb-3">
                <input
                  className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Input Success
                </label>
              </div>

              <div className="relative h-10 w-full mb-3">
                <input
                  className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Input Success
                </label>
              </div>



              <div className='flex justify-end mt-3'>
                <div className='text-[#001732] cursor-pointer font-semibold hover:bg-gray-100 bg-white text-center rounded-md px-9 py-2'>
                  Submit
                </div>
              </div>
            </form>
          </section>
        </div>

      </main>
    </>

  );
}
