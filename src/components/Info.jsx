import React from 'react'

const Info = () => {
  return (
    <section>
        <div className="flex items-center justify-center flex-col w-full mt-8 px-4">
            <div className='max-w-4xl'>
                <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Where?</h2>

                
                <img className='rounded-xl aspect-video object-cover' src="https://static.wixstatic.com/media/fe2c5d_196fd4774d3a4ce399c821e5aae5a0e7~mv2.png/v1/fill/w_3000,h_1586,al_c/_DSC4464_feat.png"/>
                
                <div className='bg-white rounded-xl shadow-md p-4 mt-4 w-full'>
                    <p className='text-gray-700 text-lg font-medium'>Exelixis</p>
                    <a href="#" className='text-gray-700 text-lg'>1851 Harbor Bay Pkwy, Alameda, CA 94502</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info