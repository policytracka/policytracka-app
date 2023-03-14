import React from 'react'
import Home from '../src/pages/Home'
import Navbar from './components/navbar/navbar'

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <div className='absolute z-10 max-w-screen-2xl'>
        <Navbar />
      </div>
      
      <div className='absolute  z-0' >
        <Home  />
        </div>
      
    </div>
  )
}

export default App