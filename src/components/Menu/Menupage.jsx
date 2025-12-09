import React from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Menupage = (props) => {

  const Menu = useRef(null)

  useGSAP(() => {
    if (props.Menu) {
      gsap.to(Menu.current, {
        top: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    } else {
      gsap.to(Menu.current, {
        top: "100%",
        duration: 0.6,
        ease: "power3.out"
      });
    }
  }, [props.Menu]);

  return (
    <div ref={Menu} className='bg-[#111] fixed top-[100%] h-screen flex w-full z-[7]'>
      <Menuleft />
      <Menuright Menu={props.Menu} setMenu={props.setMenu} />
    </div>
  )
}

export default Menupage