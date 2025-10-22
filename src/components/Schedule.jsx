import React from 'react'


const Schedule = () => {

    const schedule = [
        { time: '9:00 AM', activity: 'Registration Opens' },
        { time: '10:00 AM', activity: 'Opening Ceremony' },
        { time: '12:00 PM', activity: 'Lunch Break' },
        { time: '1:00 PM', activity: 'Workshops Begin' },
        { time: '5:00 PM', activity: 'Dinner Break' },
        { time: '6:00 PM', activity: 'Hackathon Starts' },
        { time: '8:00 PM', activity: 'Networking Event' },
    ];
  return (
    <section id="schedule" className='mb-8'>
        <div className="flex items-center justify-center flex-col w-full mt-8">
             <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Schedule</h2>
            

            <div className='flex flex-col gap-3 w-full md:w-1/2 px-4'>
                {schedule.map((item, index) => (
                        <div key={index} className="flex flex-row justify-between h-16 w-full bg-white rounded-xl shadow-md p-4">
                            
                            <span className='font-medium text-xl text-green-600'>{item.activity}</span>
                            
                            <div className='bg-gray-200 rounded-full h-4 flex items-center justify-center p-3'>
                            <p className='text-gray-600 font-medium'>{item.time}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Schedule