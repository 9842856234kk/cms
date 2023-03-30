import React from 'react'
import Addform from './blogs/Addform'
import Viewform from './blogs/Viewform'

const Home = () => {
  return (
    <div className='flex'> 
      <Addform/>
      <Viewform/>
    </div>
  )
}

export default Home