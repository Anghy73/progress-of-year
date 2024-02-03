import { useEffect, useState } from 'react'

export default function ProgressBar ({ reset }) {
  const [percentage, setPercentage] = useState(0)

  const isYearLeap = (year) => {
    if (year % 100 === 0 && year % 400 === 0) return true
    if (year % 4 === 0 && year % 100 !== 0) return true
    return false
  }

  const percentageOfYear = () => {
    const date = new Date()
    const year = date.getFullYear()
    let totalDaysOfYear = 0
    isYearLeap(year) ? totalDaysOfYear = 366 : totalDaysOfYear = 365

    const currentDate = new Date(`01/01/${year}`)
    const milliseconds = 24 * 60 * 60 * 1000
    const elapsed = Math.abs(currentDate.getTime() - date.getTime())
    const elapsedDays = Math.round(elapsed / milliseconds)

    return Math.round(elapsedDays * 100 / totalDaysOfYear)
  }

  useEffect(() => {
    if (percentage < percentageOfYear()) {
      setTimeout(() => setPercentage(prev => (prev += 1)), 70)
    }
  }, [percentage])

  useEffect(() => {
    setPercentage(0)
  }, [reset])

  return (
    <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] flex flex-col justify-center items-center w-full max-w-3xl lg:left-[50%] lg:-translate-x-[40%] p-5'>
      <div className='sm:text-[13rem] text-8xl text-cyan-600 font-bold tracking-wide mb-20 font-cha'>{`${percentage}`.padStart(3, '0')}%</div>
      <div className='relative flex justify-start items-center border-2 border-indigo-600 rounded-lg w-full max-w-2xl h-14 p-2  bg-black'>
        <div className='w-full'>
          <div
            className='bg-cyan-600 h-10 rounded' style={{
              width: `${percentage}%`,
              transition: 'width 1s'
            }}
          />
        </div>
        <div
          className='absolute left-0 h-14 rounded-lg shadow-xl shadow-cyan-600 -z-10' style={{
            width: `${percentage}%`,
            transition: 'width 1s'
          }}
        />
      </div>
    </div>
  )
}
