import { useState } from 'react'
import GoalsArea from './components/GoalsArea'
import ProgressBar from './components/ProgressBar'

function App () {
  const [reset, setReset] = useState(false)

  const handleClick = () => {
    setReset(!reset)
  }

  return (
    <main className='w-screen h-screen bg-gray-950 text-white px-5 selection:bg-indigo-950'>
      <GoalsArea />
      <ProgressBar reset={reset} />
      <button className='absolute top-10 right-20 flex justify-center items-center bg-[#0000009f] border-2 border-indigo-600 w-12 h-12 rounded-md rotate-45 active:scale-90 hover:border-cyan-600' onClick={handleClick}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-full h-full hover:rotate-45 transition-transform p-2 text-indigo-600 hover:text-cyan-600'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99' />
        </svg>

      </button>
    </main>
  )
}

export default App
