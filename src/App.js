import React from 'react'
import Header from './components/Header'
import Body from './components/Body'


function App() {
  return (
   
    <div className='bg-[url("./images/bgpattern.svg")] h-[100vh]  w-[100vw] bg-no-repeat bg-[0px_-120px] '>
      <div className='absolute top-0 left-0 w-full'>
      <Header/>
      <Body/>
      </div>
      
    </div>
  )
}

export default App