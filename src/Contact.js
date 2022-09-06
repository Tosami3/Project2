import React,{useState,useRef} from 'react'
import emailjs from '@emailjs/browser'
function Contact() {
  const [name,setName ] = useState();
  const[email,setEmail]= useState()


  const form = useRef()
    
  const sendEmail=(e)=>{
      
  
  e.preventDefault(e);
 
  emailjs.sendForm('service_ypsyuzg', 'template_1gki196', form.current, 'eyhHFmJ9gZxwp1Myl')
  .then((result) => {
      console.log(result.text);
     
  }, (error) => {
      console.log(error.text);
      
  });
   e.target.reset()
  }





  return (
    <div>


<div className=' w-full h-full justify-center  md:flex bg-violet-500'>
      

    

    
          <div className=' ju justify-center items-center py-8  '>
   <h1 className='text-center justify-center items-center text-4xl font-bold text-cyan-400 mr-12 m-2 p-2'>  Contact Us </h1>
    
      <form ref={form}  onSubmit={sendEmail} className="flex hover:bg-green-400  flex-col m-5 p-5 bg-lime-500 text-center justify-center items-center top-7  h-25">
        <label className='text-2xl'>Name</label>
        <input type="text" name="user_name" className='md:m-5 md:text-2xl' value={name} onChange={(e)=>setName(e.target.reset())} required/>
        <label className='text-2xl'>Email</label>
        <input type="email" name="user_email" className='md:m-5 md:text-2xl'   value={email} onChange={(e)=>setEmail(e.target.result())} required/>
        < label className='text-2xl '>Message</label>
        <textarea name="message"  className='md:m-5  md:text-2xl ' required/>
        <button type="submit" value="Send" className='m-2 text-2xlfont-bold bg-teal-700 w-[100px] rounded-2xl' >Send</button>
        <h2 class="h2">Contact us</h2>
      
      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not 
      hesitate to contact us directly.<br/> Our team will come back to you within
          a matter of hours to help you.</p>
  
      </form>
          </div>
         
  
  
      </div>
      
    </div>
  )
}

export default Contact
