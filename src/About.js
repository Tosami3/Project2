import React from 'react'
import { FcSportsMode } from "react-icons/fc";
import { MdOutlineSportsHockey,MdSportsMma,MdSportsVolleyball ,MdSportsTennis} from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
function About() {
  return (
    <div className='w-full h-full bg-pink-700  '>
         <h1 className='text-5xl font-bold text-opacity-90 p-4 text-white md:text-center'>Why the sport is important?</h1>

      <div className='  md:justify-center md:items-center flex py-8'>

      <span className='text-2xl Font-bold  rounded-2xl text-black'><FcSportsMode className='m-5'/> </span>
        <span className='text-2xl'>< MdSportsVolleyball className='m-4'/> </span>
        <span className='text-2xl ont-bold  rounded-2xl text-black'><IoCarSportSharp className='m-4'/> </span>
        <span className='text-2xl'><MdSportsTennis className='m-4'/></span>
        <span className='text-2xl ont-bold  rounded-2xl text-black'><MdSportsMma className='m-4'/> </span>
        <span className='text-2xl'><MdOutlineSportsHockey className='m-4'/></span>
        
       
      </div>
      <div className='  md:flex-col md:inline-block'>
        <div className=' m-4  md:flex '>
           <img src='/soon2.jpg' className=' h-60  flex=col  m-4 ml-3' />
        <img src='/toon3.png' className='  flex-col m-4 h-52 ml-3'/>
        <img src='/toon4.jpg' className='  flex-col m-4 h-52 ml-3'/></div>
       
        <div className=' flex flex-col  justify-center items-center '>

        <span className='text-5xl   font-bold m-2 yellow rounded-2xl text-black'>
          Played Around the World

        </span>

        <span className='text-black text-base font-bold mb-5 md:py-8  ml-3'>
          Here is our alphabetical list of over 800+ sports played around the world.<br/>
           In addition to individual sports, the list includes some names of sports groups,<br/> 
           styles and codes. There is undoubtedly more sports than are listed here,<br/>
           there are many regional sports, modified rules and new sports being developed <br/>
           every day (see new sports).
           </span>
           </div>
      </div>
    
    </div>
  )
}

export default About
