import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {SiGmail} from "react-icons/si"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

function Footer() {
  return (
    <div  className='w-full h-full  bg-black text-white'>
      <div className=' '>
   <div className='py-8'> <hi  className='M-4 P-4 text-4xl text-cyan-400 py-8'> Start Sport Now !!!</hi></div>
         
      <div className=' text-2xl text-fuchsia-400  flex  justify-en bg-slate-400 '>
    
         <h1 className='md:m-4 p-4'><AiFillFacebook/></h1>
        <h1 className='md:m-4 p-4'><SiGmail/></h1>
      <h1 className='md:m-4 p-4'><AiFillTwitterSquare/> </h1>
      <h1 className='md:m-4 p-4'> <AiFillInstagram/></h1>
      <h1 className='md:m-4 p-4'>< AiFillGithub/></h1>

      



      </div>
<div className='md:flex justify-center m-5 p-5'>

      <div className='m-5 p-5 text-xl text-white w-full h-full  '>
              <h1 className='m-2 p-2 text-4xl font-bold text-fuchsia-400'>Service</h1>
              
                <p className=' m-1 p-1'>Sports</p> 
              
              
                <p className=' m-1 p-1'>Medicine</p>
                
              
              
                <p className='m-1 p-1'>Starting</p> 
              
              
                <p className='m-1  p-1'>Running</p> 
              
            </div>

            <div className='m-5 p-5 text-xl text-cyan-50 text-center '>
              <h1 className='m-4 p-4 text-4xl font-bold text-fuchsia-400 '>About</h1>
              
                <p className=' m-1 p-1'>Develop</p> 
              
              
                <p className=' m-1 p-1'>Close down</p>
                
              
              
                <p className='m-1 p-1'>Considering</p> 
              
              
                <p className='m-1 p-1'>Selling</p> 
              
            </div>
            <div className='m-5 p-5 text-xl text-white  text-center '>
              <h1 className='m-4 p-4 text-4xl font-bold text-fuchsia-400'>Contact</h1>
              
                <p className=' m-1 p-1'>Gotan, D9 50012, SW</p> 
              
              
                <p className=' m-1 p-1'>Gmail@example.com</p>
                
              
              
                <p className='m-1 p-1'>+ 0046700000000</p> 
              
              
                <p className='m-1 p-1'>+ 0046700000000</p> 
              
            </div>
            </div>

      
      <div className=' text-center  text-xm'>
        © 2022 Copyright:
        <a >
          @Habesha-Forum.com Coming Soon !!!
        </a>
      </div>
      </div>
    </div>
  )
}

export default Footer
