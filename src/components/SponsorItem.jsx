import React from 'react'

const SponsorItem = ({source}) => {
  return (
    <div className='w-64 h-36 hover:scale-105 transition-transform duration-300 ease-in-out '>
        <img className='w-full h-full object-contain' src={source}></img>
    </div>
  )
}

export default SponsorItem