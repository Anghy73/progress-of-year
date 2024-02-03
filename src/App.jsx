// import { useState, useEffect } from 'react'
import GoalsArea from './components/GoalsArea'
import ProgressBar from './components/ProgressBar'

function App () {
  return (
    <main className='w-screen h-screen bg-gray-950 text-white px-5 selection:bg-indigo-950'>
      <GoalsArea />
      <ProgressBar />
    </main>
  )
}

export default App
