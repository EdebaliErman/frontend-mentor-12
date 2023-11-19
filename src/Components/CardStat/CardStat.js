import React from 'react'
import "./CardStat.css"
function CardStat() {
  return (
    <div className='cardStat'>
      <div className='absolute top-[-3rem] right-10'>
        <div className='speech-bubble'>
          <h2 className='flex justify-center items-center relative z-10 text-black text-5xl font-extrabold font-serif'>185<span className=' mt-1 mx-4 font-sans text-base font-semibold text-gray-400'>GB LEFT</span></h2>
        </div>
      </div>
      <h1>You've used <span className='text-white'>815 GB</span> of your stroge</h1>
      <div className='stat-bar'>
        <div className='skill-bar'>
          <svg className=' skill'>
          </svg>
          <svg className='pointer'></svg>
        </div>
        <div className='text-bar'>
          <h4>0 GB</h4>
          <h4>1000 GB</h4>
        </div>
      </div>
    </div>
  )
}

export default CardStat
