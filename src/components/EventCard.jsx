import React from 'react'

const EventCard = ({source}) => {
  return (
    <div className='p-2 m-4'>
        <img className='shadow-md w-72 md:w-96 h-48 md:h-64 object-cover rounded-lg' src={source}></img>
    </div>
  )
}

export default EventCard