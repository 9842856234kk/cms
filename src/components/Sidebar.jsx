import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPostcard} from 'react-icons/bs'
import {RiPagesLine} from 'react-icons/ri'
import {MdPermMedia} from 'react-icons/md'
import {RiTeamFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'



const Sidebar = () => {
  return (
    
<div className='flex  text-white flex-col px-10 py-10 gap-y-5 ' >
    <div className='flex space-x-4  pb-2 pt-2 border-2 border-black rounded-md  '>
    <div className='items-center '><AiOutlineHome/></div>
    <div><Link to={'/koirala'}>HOME</Link></div>
    </div>
    
    <div className='flex space-x-4 pb-2 pt-2 border-2 border-black rounded-md  '>
    <div ><BsPostcard/></div>
    <div><Link to={'/krishna'}>POST</Link></div>
    </div>

    <div className='flex space-x-4 pb-2 pt-2 border-2 border-black rounded-md    '>
    <div ><RiPagesLine/></div>
    <div><Link to={'/Footer'}>PAGES</Link></div>
    
    </div>

    <div className='flex space-x-4 pb-2 pt-2 border-2 border-black rounded-md  '>
    <div ><MdPermMedia/></div>
    <div><Link to={'/Media'}>MEDIA</Link></div>

    </div>

    <div className='flex space-x-4 pb-2 pt-2 border-2 border-black  rounded-md  '>
    <div ><RiTeamFill/></div>
    <div><Link to={'/Team'}>TEAMS</Link></div>

    </div>
    </div>
  )
}

export default Sidebar