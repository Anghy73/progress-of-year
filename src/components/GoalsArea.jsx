function GoalsArea () {
  const YEAR = new Date().getFullYear()

  return (
    <div className='border-2 border-indigo-600 rounded-xl overflow-hidden absolute top-[50%] translate-y-[-50%] left-5 sm:left-10 bg-[#0000008f] z-10'>
      <label className='flex flex-col justify-center items-center'>
        <p className='text-xl mb-5 mt-3 cursor-pointer text-amber-400'>Year <span>{YEAR}</span></p>
        <textarea className='bg-transparent px-5 text-amber-400 focus-visible:outline-none min-h-96 max-h-[600px]' name='goals' id='' cols='30' rows='10' />
      </label>
    </div>
  )
}

export default GoalsArea
