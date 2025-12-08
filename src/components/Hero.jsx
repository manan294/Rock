import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Power4 } from 'gsap'
import React, { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'



const Hero = () => {

const ArText = useRef(null)

useGSAP(()=>{

 gsap.set(ArText.current, {
    y: 500 ,
    opacity:0,
  });

  gsap.to(ArText.current,{
    y:0,
    opacity:1,
    delay:2.4,
    duration:.7,
    ease: "power4.out"
  })
})



  return (
    <div className='w-full h-screen sm:h-100vh flex justify-center items-center'>
      <img className='w-full h-full object-cover' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" alt="" />

      <div className='center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center '>
        <div className='maintext flex justify-center overflow-hidden h-[300px] items-center '>
          <h3 ref={ArText} className='text-white sm:text-[20rem] text-8xl font-black tracking-tight leading-none font-[ArockFontU8]'>AROCK</h3>
        </div>

        <div className=' w-full flex justify-between items-center text-white -mt-7 sm:-mt-12 h-20'>

          <div className='flex gap-3'>
            <i className="ri-play-circle-line sm:text-[1.6vw]"></i>
            <h3 className='tracking-tight text-[.5rem] sm:text-xs uppercase'>Play <br />The Film</h3>
          </div>

          <div className='flex justify-between font-[ArockFontA4] gap-5 sm:gap-20'>
            <h3 className='tracking-tight text-[.5rem] sm:text-xs uppercase'>Creator <br />Curator</h3>
            <h3 className='tracking-tight text-[.5rem] sm:text-xs uppercase'>New York <br />Los Angeles</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero