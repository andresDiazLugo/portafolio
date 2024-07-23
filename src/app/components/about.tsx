import React from 'react'
import Image from "next/image"
import frame from "../../../public/about.png";
export default function About() {
  return (
    <section id="about" className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 max-w-[70%] lg:h-screen m-auto '>
        <div data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine" className='flex items-center justify-center '>
            <Image className=' w-[70%]' src={frame} alt='imagen Home'/>
        </div>
        <div className='flex items-center '>
        <div data-aos="zoom-in-left"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        className='flex flex-col gap-4' >
            <div>
                <h2 className=' animate-bounce animate-infinite text-[4rem] font-[700] text-text-color'>Sobre <span className='  text-main-color'>Mi</span></h2>
                <h3 className=' text-[3rem] font-[600] text-text-color'>Hola, Estoy aqui para ayudarte en tu proximo proyecto</h3>
            </div>
            <div>
                <p className='  text-[1.7rem] text-text-color'>
                Hola, mi nombre es Alberto Andrés. Soy técnico analista de sistemas, analista programador y desarrollador web. Cuento con manejo de varios lenguajes como JavaScript, PHP, Python, C#, así como de los siguientes frameworks: Laravel, Django, Tkinter, React, Next.js, Angular, ABP Framework y ASP.NET.

                Tengo conocimientos en gestión y desarrollo de software y sistemas, programación, modelado y gestión de bases de datos. Actualmente, trabajo en Gravitad (consultoría y servicios a empresas) como encargado de proyectos y frontend developer. Me encuentro desarrollando proyectos MVP (Minimum Viable Product). Por políticas de empresa, no puedo compartir el repositorio de código, pero puedo mostrar videos sobre los proyectos. Para esto, debes contactarte conmigo y solicitarlos si deseas revisarlos.

                Si necesitas más ajustes o mejoras, no dudes en decirme.
                </p>
            </div>
            {/* <button className=' pl-9 pr-9 pt-3 pb-3 bg-main-color text-[1.7rem] text-white rounded-lg animate-wiggle animate-infinite animate-ease-in-out '>Saber mas</button> */}
        </div>
        </div>
    </section>
  )
}
