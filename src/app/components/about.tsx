import React from 'react'
import Image from "next/image"
import profile from "../../../public/profile.png";

export default function About() {
  return (
    <section
    data-aos="zoom-in-left"
    data-aos-offset="500"
    data-aos-easing="ease-in-sine"
    id="about"
    className="container my-32 w-full p-5 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 bg-gradient-to-r from-blue-900 via-blue-600 to-green-900 rounded-lg"
  >
    <div
      data-aos="zoom-in-left"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
      className="w-full h-full"
    >
      <Image
        className="w-full object-cover"
        src={profile}
        alt="imagen presentacion"
      />
    </div>
    <div
      data-aos="zoom-in-left"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
      className="flex flex-col gap-4 m-auto"
    >
      <div>
        <h2 className="animate-bounce animate-infinite text-[4rem] text-center lg:text-start font-[700] text-white">
          Sobre <span className="text-main-color">Mi</span>
        </h2>
        <h3 className="text-[3rem] font-[600] text-white">
          Hola, Estoy aqui para ayudarte en tu proximo proyecto
        </h3>
      </div>
      <div>
        <p className="text-[1.7rem] text-white">
        Hola, mi nombre es Alberto Andrés. Soy técnico analista de sistemas, analista programador y desarrollador web. Cuento con manejo de varios lenguajes como JavaScript, PHP, Python, C#, así como de los siguientes frameworks: Laravel, Django, Tkinter, React, Next.js, Angular, ABP Framework y ASP.NET.

        Tengo conocimientos en gestión y desarrollo de software y sistemas, programación, modelado y gestión de bases de datos. Actualmente, trabajo en Gravitad (consultoría y servicios a empresas) como encargado de proyectos y frontend developer. Me encuentro desarrollando proyectos MVP (Minimum Viable Product). Por políticas de empresa, no puedo compartir el repositorio de código, pero puedo mostrar videos sobre los proyectos. Para esto, debes contactarte conmigo y solicitarlos si deseas revisarlos.
        </p>
      </div>
    </div>
  </section>
  )
}
