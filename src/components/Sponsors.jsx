import React from 'react'
import SponsorItem from './SponsorItem.jsx';



const Sponsors = () => {
    const exelixis = import.meta.glob('/src/assets/sponsors/exelixis.png', { eager: true })['/src/assets/sponsors/exelixis.png'].default;
    const penumbra = import.meta.glob('/src/assets/sponsors/penumbra.png', { eager: true })['/src/assets/sponsors/penumbra.png'].default;
    const ahs = import.meta.glob('/src/assets/sponsors/ahs-logo.png', { eager: true })['/src/assets/sponsors/ahs-logo.png'].default;
    const ehs = import.meta.glob('/src/assets/sponsors/encinal.png', { eager: true })['/src/assets/sponsors/encinal.png'].default;
    return (
        <section id="sponsors" className='mt-4 flex justify-center'>
            <div className='max-w-4xl'>
                <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Our Sponsors</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-8'>
                    <SponsorItem source={exelixis}></SponsorItem>
                    <SponsorItem source={ahs}></SponsorItem>
                    <SponsorItem source={ehs}></SponsorItem>
                </div>
            </div>
        </section>
    )
}

export default Sponsors