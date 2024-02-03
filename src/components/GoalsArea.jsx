import { useEffect } from 'react'

function GoalsArea () {
  const year = new Date().getFullYear()

  const handleChange = (e) => {
    const message = e.target.value
    // eslint-disable-next-line no-undef
    localStorage.setItem('message', message)
  }

  useEffect(() => {
    const goals = document.getElementById('goals')
    // eslint-disable-next-line no-undef
    goals.value = localStorage.getItem('message')
  }, [])

  return (
    <div className='border-2 border-indigo-600 rounded-xl overflow-hidden absolute top-[50%] translate-y-[-50%] left-5 sm:left-10 bg-[#0000009f] z-10'>
      <label className='flex flex-col justify-center items-center'>
        <p className='text-xl mb-5 mt-3 cursor-pointer text-amber-400'>Year <span>{year}</span></p>
        <textarea onChange={handleChange} className='bg-transparent px-5 text-amber-400 focus-visible:outline-none min-h-96 max-h-[600px]' name='goals' id='goals' cols='30' rows='10' />
      </label>
    </div>
  )
}

export default GoalsArea
