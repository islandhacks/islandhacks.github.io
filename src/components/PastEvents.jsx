import React from 'react'
import Marquee from "react-fast-marquee";
import EventCard from './EventCard.jsx';

const PastEvents = () => {
    const totalImages = 18; // how many you have
    const images = import.meta.glob('/src/assets/pastevents/*.jpg', { eager: true });

    const imageList = Object.entries(images)
        .sort(([a], [b]) => {
            const numA = parseInt(a.match(/(\d+)\./)[1], 10);
            const numB = parseInt(b.match(/(\d+)\./)[1], 10);
            return numA - numB;
        })
        .map(([, mod]) => mod.default);
  return (
    <section id="past-events" className="py-10 px-8">
        <div className='bg-blend-lighten'>
            <h2 className="text-3xl text-amber-400 font-bold text-center mb-6">Past Events</h2>
            
            <Marquee>
                {imageList.map((src, idx) => (
                        <EventCard key={idx} source={src} alt={`image-${idx + 1}`} />
                    ))}
                
            </Marquee>
        </div>
    </section>
  )
}

export default PastEvents