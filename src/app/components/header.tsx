"use client"
import React, { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId:string) => {
    setShowMenu(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='fixed top-0 left-0 w-full transparent z-20 bg-opacity-50 backdrop-filter backdrop-blur-md'>
      <div className='transparent max-w-[70%] p-6 m-auto flex flex-col lg:flex-row items-center justify-between z-20 gap-4'>
        <div className='lg:hidden flex items-center justify-end  w-full'>
          <button
            className='text-[2rem] text-main-color font-[600] cursor-pointer'
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        <a className='text-[2rem] text-main-color font-[600] cursor-pointer '>Portfolio</a>

        {/* Barra de hamburguesa para pantallas pequeñas */}

        {/* Navegación para pantallas grandes */}
        <nav className={`flex lg:flex-row ${showMenu ? 'hidden' : 'flex-col'}  items-center justify-center gap-9`}>
          <a onClick={()=>scrollToSection('home')} className='text-[1.7rem] text-black font-[600] p-2 hover:bg-main-color hover:text-white cursor-pointer rounded-lg'>Inicio</a>
          <a onClick={()=>scrollToSection('about')} className='text-[1.7rem] text-black font-[600] p-2 hover:bg-main-color hover:text-white cursor-pointer rounded-lg'>Sobre Mi</a>
          <a onClick={()=>scrollToSection('portfolio')} className='text-[1.7rem] text-black font-[600] p-2 hover:bg-main-color hover:text-white cursor-pointer rounded-lg'>Proyectos</a>
          <a onClick={()=>scrollToSection('contact')} className='text-[1.7rem] text-black font-[600] p-2 hover:bg-main-color hover:text-white cursor-pointer rounded-lg'>Contactame</a>
        </nav>
      </div>
    </header>
  );
}