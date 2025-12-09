import gsap from 'gsap'
import React from 'react'

const Menuright = (props) => {


const Menuclose = () => {
    props.setMenu(false)
  }

  return (
    <div className='w-full h-screen flex flex-col justify-between sm:w-1/3 h-screen bg-[#111] text-white'>
      <div className='bar w-full h-10 flex justify-between py-2 px-5'>
        <h1>LOGO</h1>
        <button onClick={Menuclose} className='text-xs font-light uppercase font-[ArockFontA4] hover:opacity-70 cursor-pointer
'>Close</button>
      </div>

      <div className='flex flex-col items-start px-5'>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >ABOUT</h3>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >STORY</h3>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >PROJECTS</h3>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >RELEASES</h3>
      </div>




      <div className="flex flex-col gap-10 py-2 pt-4 -mb-[19vh] sm:-mb-0">

        <div className="flex justify-between items-start px-6 py-2 w-full">

          <h3 className="text-xs font-light uppercase font-[ArockFontA4] leading-tight"> FOLLOW<br />(AROCKS) </h3>

          <div className="flex flex-col items-end items-start w-1/2">
            <h2 className="text-xs font-light uppercase font-[ArockFontA4]">INSTAGRAM</h2>
            <h2 className="text-xs font-light uppercase font-[ArockFontA4]">YOUTUBE</h2>
          </div>

        </div>



        <div className="flex justify-between items-start px-6 py-2 w-full">

          <h3 className="text-xs font-light uppercase font-[ArockFontA4] leading-tight"> LISTEN<br />(AROCKS) </h3>

          <div className="flex flex-col items-start w-1/2">
            <h2 className="text-xs font-light uppercase text-left font-[ArockFontA4]">SPOTIFY</h2>
            <h2 className="text-xs font-light uppercase text-left font-[ArockFontA4]">MIXCLOUD</h2>
          </div>

        </div>

      </div>





      <div className='gettouch flex justify-between items-center w-full px-6 py-2 mb-5 sm:mb-0 '>
        <h3 className='text-xs font-light uppercase font-[ArockFontA4]  text-left'>GET IN TOUCH !</h3>
        <h3 className='text-xs uppercase font-[ArockFontA4] w-fit text-black bg-white py-1 px-1 self-start inline-block text-left font-semibold'>EMAIL</h3>
      </div>

      <div className='gettouch flex justify-between hidden sm:flex items-center px-6 py-2 mb-[4vh]  '>
        <h3 className='text-xs font-light uppercase font-[ArockFontA4]'>SAN DIEGO <br />BPM MUSIC<br />1600 NATIONAL AVE<br />SAN DIEGO, CA 92123</h3>
        <h3 className='text-xs font-light uppercase font-[ArockFontA4]'>LOS ANGELES <br />6255 SUNSET BLVD<br />SUITE #700<br />LOS ANGELES, CA 90028</h3>
      </div>

    </div>
  )
}

export default Menuright