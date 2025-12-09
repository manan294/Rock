import React, { useState } from 'react'
import Loader from './components/Loader'
import Home from './components/Home'
import Menupage from './components/Menu/Menupage'

const App = () => {

 const [Menu,setMenu] = useState(false)


  return (

    <div className='h-screen bg-black'>
      <Menupage Menu={Menu} setMenu={setMenu}/>   
      <Loader />
      <Home Menu={Menu} setMenu={setMenu}/>
    </div>
  )
}

export default App