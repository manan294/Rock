import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen sm:h-100vh flex relative justify-center items-center'>
      <img className='w-full h-full object-cover' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" alt="" />

      <div className='center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center '>
        <div className='maintext  flex justify-center items-center '>
          <h3 className='text-white sm:text-[21rem] text-8xl font-black'>AROCK</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero