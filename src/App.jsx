import React from 'react'
import Loader from './components/Loader'
import Home from './components/Home'

const App = () => {

  return (

    <div className='h-screen'>
      <Loader />
      <Home />
    </div>
  )
}

export default App