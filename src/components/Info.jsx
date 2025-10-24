import React from 'react'

const Info = () => {
  return (
    <section>
        <div className="flex items-center justify-center flex-col w-full mt-8 px-4">
            <div className='max-w-4xl'>
                <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Where?</h2>

                
                <img className='rounded-xl aspect-video object-cover' src="https://www.penumbrainc.com/wp-content/uploads/2023/05/Penumbra-Alameda-hq.webp"/>
                

                <div className='bg-white rounded-xl shadow-md p-4 mt-4 w-full'>
                    <p className='text-gray-700 text-lg font-medium'>Penumbra</p>
                    <a href="#" className='text-gray-700 text-lg'>1351 Harbor Bay Pkwy | Alameda, CA</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info