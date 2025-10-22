import React from 'react'
import SponsorItem from './SponsorItem.jsx';



const Sponsors = () => {
    const exelixis = import.meta.glob('/src/assets/sponsors/exelixis.png', { eager: true })['/src/assets/sponsors/exelixis.png'].default;
    
    return (
        <section id="sponsors" className='mt-4 flex justify-center'>
            <div className='max-w-4xl'>
                <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Our Sponsors</h2>
                <div className='grid grid-cols-3 gap-4 p-8'>
                    <SponsorItem source={exelixis}></SponsorItem>
                </div>
            </div>
        </section>
    )
}

export default Sponsors