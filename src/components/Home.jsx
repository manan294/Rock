import React, { useRef } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { useGSAP } from '@gsap/react'
import gsap, { Power4 } from 'gsap/all'

const Home = () => {


    const home = useRef(null)
    const page = useRef(null)
    const tl = gsap.timeline()

    useGSAP(() => {
        tl.to(home.current, {
            duration: 1,
            delay: 2.4,
            ease: Power4,
            y: "-200%"
        })
        .from(page.current,{
            scale:1.2,
            duration:1,
            delay:-1.2,
            ease:Power4.easeInOut
        })


    })

    return (
        <div className='h-screen z-50 bg-tranparent overflow-hidden'>
            <div ref={home} className='h-screen w-full bg-[#111] z-10 fixed'>
            </div>

            <div ref={page} className=' w-full min-h-screen'>
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}

export default Home