import React from 'react'
import Loader from './components/Loader'
import Home from './components/Home'
import Menupage from './components/Menu/Menupage'

const App = () => {

  return (

    <div className='h-screen bg-black'>
      <Menupage/>
      <Loader />
      <Home />
    </div>
  )
}

export default App