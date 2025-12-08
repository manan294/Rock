import React from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'

const Menupage = () => {
  return (
    <div className='bg-[#111] fixed top-0 h-screen flex w-full z-[5]'>
      <Menuleft/>
      <Menuright/>
    </div>
  )
}

export default Menupage