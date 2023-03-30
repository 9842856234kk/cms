import React from 'react'
import {BiSearchAlt2}from 'react-icons/bi';
import {GrNotification} from 'react-icons/gr';
import KP from '../img/kp.jpg';

const Header = () => {
  return (
    <div className='flex justify-between  bg-blue-900'>
    <div className='flex gap-4'>
        <div className='text-white align-middle'>
          <span className='bg-black text-white px-1'>
            B
          </span>
          logMgmt</div>
    </div>
    <div className='flex'>
    <div className='flex gap-4 items-center bg-white mr-28'> <BiSearchAlt2/> 
     <input type="text" placeholder='search' className='bg-transparent focus:outline-none'/></div>
 <div>
  <img src={KP} alt="" srcset="" width={25} className="rounded-3xl cursor-pointer"/>
 </div>
 <div className='text-white cursor-pointer align-middle underline-offset-2 ' >krishna prasad koirala</div>
    <div className='bg-blue-400 cursor-pointer'><GrNotification/></div>

    </div>
    </div>
  )
}

export default Header