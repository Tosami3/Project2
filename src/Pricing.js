import React from 'react';
import {GiCapricorn} from 'react-icons/gi'
import {ImPriceTags} from 'react-icons/im'
import {MdPriceChange} from 'react-icons/md'

function Pricing() {
  return (
    <div className='w-full  h-full bg-yellow-900 justify-center items-center flex'>
  <div className='md:flex'>
      <div className=' top-4 py-8'>
      <div className='  flex flex-col  hover:bg-gray-900 text-center justify-center items-center  bg-lime-400 top-8 m-4 p-4 h-25'>
        <GiCapricorn className='t justify-center items-center text-8xl  rounded-2xl m-4 p-4 bg-fuchsia-300 ' />
    <h1 className='text-4xl font-bold text-rose-600 '>Basic</h1>
    <h2 className='text-6xl font-bold text-black m-3 p-4'>$30</h2>
    <div className='m-4 p-4 text-cyan-50 text-xl flex-col flex '> 
    <span>1GB Of Free Data Per Month</span>
        <span>2 Domain Website</span>
        <span>3 Email Addresses</span>
        <span>Assistance Free</span>
        <button className='text- text-3xl bg-red-500 text-fuchsia-400 mt-4 rounded-2xl m-2 p-2'>Get Start</button>
</div>
  
      </div>
      </div>

      <div className=' top-4 py-8'>
      <div className='  flex flex-col text-center justify-center  hover:bg-gray-900  items-center bg-lime-400 top-8 m-4 p-4 h-25'>
        <ImPriceTags className='t justify-center items-center text-8xl  rounded-2xl m-4 p-4 bg-fuchsia-300 ' />
    <h1 className='text-4xl font-bold text-rose-600 '>Standard</h1>
    <h2 className='text-6xl font-bold text-black m-3 p-4'>$50</h2>
    <div className='m-4 p-4 text-cyan-50 text-xl flex-col flex '> 
    <span>10GB Of Free Data Per Month</span>
        <span>5 Domain Website</span>
        <span>5Email Addresses</span>
        <span>Assistance Free</span>
        <button className='text- text-3xl bg-red-500 text-fuchsia-400 mt-4 rounded-2xl m-2 p-2'>Get Start</button>
</div>
  
      </div>
      </div>
      <div className=' top-4 py-8'>
      <div className='  flex flex-col text-center justify-center items-center  hover:bg-gray-900  bg-lime-400 top-8 m-4 p-4 h-25'>
        <MdPriceChange className='t justify-center items-center text-8xl  rounded-2xl m-4 p-4 bg-fuchsia-300 ' />
    <h1 className='text-4xl font-bold text-rose-600 '>Premium</h1>
    <h2 className='text-6xl font-bold text-black m-3 p-4'>$100</h2>
    <div className='m-4 p-4 text-cyan-50 text-xl flex-col flex '> 
    <span>100GB Of Free Data Per Month</span>
        <span>10 Domain Website</span>
        <span>10 Email Addresses</span>
        <span>Assistance Free</span>
        <button className='text- text-3xl bg-red-500 text-fuchsia-400 mt-4 rounded-2xl m-2 p-2'>Get Start</button>
</div>
  
      </div>
      </div>
      </div>
    </div>
  )
}

export default Pricing
