import React from 'react'

const Info = () => {
  return (
    <section>
        <div className="flex items-center justify-center flex-col w-full mt-8 px-4">
            
                <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Where?</h2>

                <div className='w-full md:w-1/2'>
                <img className='rounded-xl aspect-video object-cover' src="https://www.penumbrainc.com/wp-content/uploads/2023/05/Penumbra-Alameda-hq.webp"/>
                </div>

                <div className='bg-white rounded-xl shadow-md p-4 mt-4 w-full md:w-1/2'>
                    <p className='text-gray-700 text-lg font-medium'>Exelixis Facility</p>
                    <a href="#" className='text-gray-700 text-lg'>1351 Harbor Bay Pkwy | Alameda, CA</a>
                </div>
            
        </div>
    </section>
  )
}

export default Info