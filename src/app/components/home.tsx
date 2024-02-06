import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Image from "next/image"
import home from "../../../public/home.png";
export default function Home() {
  const downloadCv = () => {
    const link = document.createElement('a');
    link.href = '/cvAlbert.pdf';  // Cambia la ruta a la ubicación de tu currículum
    link.download = 'mi_cv.pdf';
    link.click();
  };

  return (
    <section id="home" data-aos="fade-up-right"  className=' grid grid-cols-1 w-full lg:h-screen m-auto  lg:grid-cols-2 xl:grid-cols-2 xl:max-w-[90%]'>
      <div className='flex justify-center items-center lg:p-6'>
        <div className='p-6  w-[40rem] m-auto'>
          <h2 data-aos="flip-left" data-aos-offset="500"className='text-[4rem] font-semibold text-text-color '>Hola, Me llamo</h2>
          <h1 data-aos="flip-left" data-aos-offset="500" className='text-[5rem] font-semibold mb-3 text-text-color'>Alberto Andres</h1>
          <div data-aos="flip-left" data-aos-offset="300" className='mb-6'>
            <p className='text-[1.7rem] text-text-color'>
                Soy tecnico en analisis de sistemas,
                analista programador y desarrollador web,
                bienvenido a mi portafolio en este sitio
                encontraras información para conocerme
            </p>
          </div>
          <ul  className='flex gap-4 mb-7'>
            <li className='flex items-center justify-center p-3 border-2 border-main-color rounded-[50%] cursor-pointer'>
              <a href='https://www.linkedin.com/in/alberto-diaz-lugo-91b0a0239/' target="_blank"><FaLinkedin className='text-main-color' size={20} /></a>
            </li>
            <li className='flex items-center justify-center p-3 border-2 border-main-color rounded-[50%] cursor-pointer'>
              <a href='https://github.com/andresDiazLugo?tab=repositories' target="_blank"><IoLogoGithub  className='text-main-color' size={20} /></a>
            </li>
          </ul>
          <button  onClick={downloadCv} className=' pl-9 pr-9 pt-3 pb-3 bg-main-color text-[1.7rem] text-white rounded-lg animate-wiggle animate-infinite animate-ease-in-out '>
            Download cv
          </button>
        </div>
      </div>
      <div className='relative hidden lg:block'>
        <div className='w-full h-full z-10 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ' style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%, 26% 50%)' }}>
            <Image className=' absolute w-[10rem] top-8 left-64  lg:top-72 lg:left-80 lg:w-[40%]' src={home} alt='imagen presentacion'/>
        </div>
        <div data-aos="zoom-in-left" data-aos-offset="950" className='absolute top-0 border border-main-color  rounded-[50%] w-full h-full  '>
            <div className=' w-full h-full relative rounded-[50%] '>
                <h3 className='absolute top-[50%] left-1 text-[1.7rem] font-[600]'>Desarrollador Web</h3>
            </div>
        </div>
      </div>
    </section>
  );
}