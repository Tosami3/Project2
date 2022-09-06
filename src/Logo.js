import React from 'react'

function Logo() {
  return (
    <div className='w-full h-full justify-between  flex bg-slate-900 flex-col mb-0'>
       
       
        
    
      <div className=' md:max-w[1240]  mx-auto mt-6 md:grid-cols-2 m-5  p-5' >
        <div className='md:flex  md:items-center md:w-full  '>

       <div className='flex-col '><img src="/soon.jpg"   className=' md:w-full h-60 mr-3 '/></div>
      
      <div className=' m-4 md:flex-col text-white '>
        <p className='m-2 text-yellow-300 text-4xl font-bold ' >Sports Health</p>
      <p className='text-white text-2xl font-bold'>How to Understand Skill Acquisition in Sport </p>
      <p className='text-white text-2xl font-bold'>Development of a Skill Acquisition<br></br> 
        Periodisation Framework for High-Performance Sport</p>
      <button 
       className 
       = ' md:text-4xl bg-green-400  font-bold m-2  hover:bg-slate-200   rounded-2xl text-black'>Start Sports</button>
      </div>

      
    




      </div>
      <div className='  m-5 p-4  text-white'>

      <div className='  m-5 p-4 flex  flex-col'>

<span className='m-2 text-rose-500 text-4xl font-bold text-center ' >Physical Health Benefits of Sports</span>
 <span className='flex m-4 text-center justify-center items-center text-white text-2xl font-bold'> Clearly, sports can help you reach your fitness goals and 
   maintain a healthy weight. However, <br/> they also encourage healthy 
   decision-making such as not <br/>smoking and not drinking. Sports also have hidden health 
   benefits such as lowering the <br/>chance of osteoporosis or breast cancer later in life. </span>

   </div>
<div className='   justify-center items-center text-center flex'>

 <span><img src='/sport.png' className='h-28 m-5 '/></span>
  <span><img src='/sports.png' className='h-28 m-5  '/></span>
  <span><img src="/toon2.png" className='h-28 m-5 '/></span>
  
  <span><img src='/toon.png' className='h-28 m-5 '/></span>
  <span><img src='/toon1.png' className='h-28 m-5 '/></span>
  

</div>
 
 
   
    </div>
     </div> 
  
     </div>
  )
}

export default Logo
