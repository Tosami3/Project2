import React ,{useState}from 'react'
import {FaTimes,FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Header() {
  const [click, setClick] = useState(false)

const handel =()=>setClick(!click)

  return (
    <div className='w-full h-full justify-between  items-center  flex bg-black '>
       
          
        <h1 className='  flex text-3xl  m-4 p-4 font-bold   rounded-2xl text-blue-700'>Sport</h1>
        

        <ul className='md:flex hidden md:text-white text-white'>
        <Link to='/'><li className='m-4 text-xl'> Home</li></Link>
      <Link to='/logo'>  <li className='m-4 text-xl'> Logo</li></Link>
       <Link to='/service'><li className='m-4  text-xl'> Service</li> </Link> 
       <Link to='/contact'> <li className='m-4  text-xl'> Contact</li> </Link>
       <Link to='/about'>  <li className='m-4  text-xl'> About</li></Link>
       <Link to='/pricing'><li className='m-4 text-xl'> Pricing</li></Link> 
       <Link to='/Footer'> <li className='m-4  text-xl'> Footer</li></Link>
        </ul>
       
        <span className=' md:text-3xl bg-zinc-900  font-bold  m-5 p-6  rounded-2xl
         text-green-400'> Global Sports Division </span>

<div className=' md:hidden p-5 m-5 py-8 text-white' onClick={handel}>{!click ?
         ( <FaBars className='w-5'/>):(< FaTimes className='w-5 '/>)}
       
       </div>



       <div className={!click ? 
        ('hidden'):
        ('  md:hidden absolute  text-center justify-center items-center  text-white md:flex-col top-32 w-full h-50 bg-green-900')}>  
  
  
       <ul className=' '>
       <Link to='/'><li className='m-4 text-xl'> Home</li></Link>
      <Link to='/logo'>  <li className='m-4 text-xl'> Logo</li></Link>
       <Link to='/service'><li className='m-4  text-xl'> Service</li> </Link> 
       <Link to='/contact'> <li className='m-4  text-xl'> Contact</li> </Link>
       <Link to='/about'>  <li className='m-4  text-xl'> About</li></Link>
       <Link to='/pricing'><li className='m-4 text-xl'> Pricing</li></Link> 
       <Link to='/Footer'> <li className='m-4  text-xl'> Footer</li></Link>
        </ul>


   
    
  
  
  </div>



      
    </div>
  )
}

export default Header
