import React from 'react'

const EventCard = (source) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 m-4'>
        <img className='w-64 h-36' src={source}></img>
    </div>
  )
}

export default EventCard