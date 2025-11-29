import { useGSAP } from '@gsap/react'
import gsap, { Power3, Power4 } from 'gsap/all'
import React, { useRef } from 'react'

const Loader = () => {

    const line = useRef(null)
    const tl = gsap.timeline()
    useGSAP(() => {
        tl.to(line.current, {
            width: "100%",
            duration: 1,
            delay: 1.4,
            ease: Power3.easeInOut
        })
            .to(line.current, {
                opacity: 0
            })
    })

    return (
            <div className='h-1 fixed z-[51] w-full bg-transparent'>
                <div ref={line} className='w-0 h-full bg-white rounded-lg'>
                </div>
            </div>
    )
}

export default Loader