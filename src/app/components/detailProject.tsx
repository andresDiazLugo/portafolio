import React, { useRef, useEffect } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";


interface Project{
    id:number,
    img:string,
    title:string,
    gitHub:string,
    deploy:string,
    tecnology:string[],
    description:string
}
interface Params {
    data:Project,
    recolectDataProject:(e:undefined | Project) => void
}
interface Props{
    params:Params
}

export default function DetailProject({params}:Props) {
    const divRef:any = useRef(null);
    useEffect(() => {
        // Función para manejar el clic fuera del div
        const handleClickOutside = (event:any) => {
            params.recolectDataProject(undefined);
        };
    
        // Agrega el event listener al documento cuando el componente se monta
        document.addEventListener('click', handleClickOutside);
    
        // Elimina el event listener cuando el componente se desmonta
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []); 
  return (
    <div ref={divRef}  className='fixed top-0 left-0 p-4 flex items-center justify-center w-full h-screen bg-opacity-50 backdrop-filter backdrop-blur-lg z-40 animate-fade-down'>
        <div className='bg-white-100 w-full lg:w-[60rem] '>
            <div className='w-full  flex items-center justify-center lg:justify-end bg-transparent'><button onClick={()=>params.recolectDataProject(undefined)} className=' text-3xl font-semibold p-4'>X</button></div>
            <img src={params?.data.img} />
            <h3 className='text-center text-3xl font-semibold mt-5 mb-5'>{params?.data.title}</h3>
            <p className='text-center text-lg font-medium'>
                {params?.data.description}
            </p>
            <div className=' flex items-center justify-around mt-5'>
                <a className='p-3 bg-white rounded-full cursor-pointer' href={params?.data.gitHub} target="_blank"><IoLogoGithub size={20}/></a>
                <a className='p-3 bg-white rounded-full cursor-pointer' href={params?.data.deploy} target="_blank"><IoIosLink size={20}/></a>
            </div>
        </div>
    </div>
  )
}
