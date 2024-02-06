"use client"
import Home from "@components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contactme from "./components/contactme";
import { useEffect,useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import DetailProject from "./components/detailProject";
export default function PageMain() {
const [renderDetail,SetRenderDetail] = useState(false);
const [recordDataProject, setRecordDataProject] = useState(
  {
    id:0,
    img:"",
    title:"",
    gitHub:"",
    deploy:"",
    tecnology:[""],
    description:"ssdsdsdsdsds"
}
);

const recolectDataProject = (element: {
  id:number,
  img:string,
  title:string,
  gitHub:string,
  deploy:string,
  tecnology:string[],
  description:string
} | undefined)=>{
  if(element !== undefined){
    setRecordDataProject(element);
  }
  SetRenderDetail(!renderDetail);
}


  useEffect(()=>{
    AOS.init();
  })
  return (
    <main>
      <Home/>
      <About/>
      {
        renderDetail ? 
        <DetailProject params={{data:recordDataProject, recolectDataProject:recolectDataProject}}/>
        :
        ""
      }
      <Portfolio params={{recolectDataProject:recolectDataProject}}/>
      <Contactme/>
    </main>
  );
}
