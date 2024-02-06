import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { projects } from "@projects/structureProjects";
import DetailProject from './detailProject';


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
    recolectDataProject:(e:undefined | Project) => void
}
interface Props{
    params:Params
}

export default function Portfolio({params}:Props) {
  return (
    <section id="portfolio" data-aos="flip-right" data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"  className='flex flex-col gap-10 justify-center items-center mt-24'>
        <h2 className='text-[4rem] font-[700] text-text-color animate-bounce animate-infinite'>Mis <span className=' text-main-color'>proyectos</span></h2>
        <ul  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                projects.map((project,index) => {
                    return <li key={index} className='relative rounded-3xl w-[30rem]  overflow-hidden  shadow-2xl p-6'>
                            <img className='transform transition-transform hover:scale-105 group-hover:animate-jump-in' src={project.img} alt='imagen del proyecto'/>
                            <div className=" flex items-center justify-between">
                                <h3 className="text-2xl">{project.title}</h3>
                                <div className=' flex items-center justify-center gap-4'>
                                    <a className='p-3 bg-white rounded-full cursor-pointer' href={project.gitHub} target="_blank"><IoLogoGithub size={20}/></a>
                                    <a className='p-3 bg-white rounded-full cursor-pointer' href={project.deploy} target="_blank"><IoIosLink size={20}/></a>
                                </div>
                            </div>
                            <div className=' flex items-center justify-center gap-4'>
                                    <p className='line-clamp-3'>{project.description}</p>
                            </div>
                            <button onClick={()=> params.recolectDataProject(project)} className=' bg-main-color p-2 rounded-lg text-white mt-2'>Leer mas</button>
                    </li>
                })
            }
        </ul>
    </section>
  )
}
