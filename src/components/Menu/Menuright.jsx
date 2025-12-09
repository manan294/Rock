import gsap from 'gsap'
import React from 'react'

const Menuright = (props) => {


  () => {
    if (props.Menu === false) {
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-between sm:w-1/3 h-screen bg-[#111] text-white'>
      <div className='bar w-full h-10 flex justify-between py-2 px-5'>
        <h1>LOGO</h1>
        <button className='text-xs font-light uppercase font-[ArockFontA4] hover:opacity-70'>Close</button>
      </div>

      <div className='flex flex-col items-start px-7 '>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >ABOUT</h3>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >STORY</h3>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >PROJECTS</h3>
        <h3 className='text-3xl leading-none font-[ArockFontu8] tracking-tight font-semibold' >RELEASES</h3>
      </div>




      <div className="grid grid-cols-2 w-full gap-y-10 py-4 px-6">

        <div>
          <h3 className="text-xs font-light uppercase font-[ArockFontA4] leading-tight">
            FOLLOW<br />(AROCKS)
          </h3>
        </div>

        <div className="flex flex-col items-start gap-1">
          <h2 className="text-xs font-light uppercase font-[ArockFontA4]">INSTAGRAM</h2>
          <h2 className="text-xs font-light uppercase font-[ArockFontA4]">YOUTUBE</h2>
        </div>

        <div>
          <h3 className="text-xs font-light uppercase font-[ArockFontA4] leading-tight">
            LISTEN<br />(AROCKS)
          </h3>
        </div>

        <div className="flex flex-col items-start sm:mb-14 gap-1">
          <h2 className="text-xs font-light uppercase font-[ArockFontA4]">SPOTIFY</h2>
          <h2 className="text-xs font-light uppercase font-[ArockFontA4]">MIXCLOUD</h2>
        </div>

      </div>


    </div>
  )
}

export default Menuright