import React from 'react'

const Navbar = (props) => {

    const menuBaropens = () => {
        props.setMenu(true)
    }
    return (

        <div className='w-full absolute z-[2]'>

            <div className='flex justify-between h-10 max-w-screen-2xl mx-auto px-5 py-2 items-center text-white'>
                <h1>LOGO</h1>
                <button onClick={menuBaropens} className='text-xs font-light font-[ArockFontA4] hover:opacity-70 cursor-pointer
'>MENU</button>
            </div>

        </div>

    )
}

export default Navbar