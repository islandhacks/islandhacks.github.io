import React from 'react'
import Marquee from "react-fast-marquee";
import EventCard from './EventCard.jsx';

const PastEvents = () => {
  return (
    <section id="past-events" className="py-10 px-8">
        <div className='bg-blend-lighten'>
            <h2 className="text-3xl text-amber-400 font-bold text-center mb-6">Past Events</h2>
            
            <Marquee>
                <EventCard source={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}></EventCard>
                <EventCard source={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}></EventCard>
                <EventCard source={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}></EventCard>
                <EventCard source={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}></EventCard>
                <EventCard source={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}></EventCard>
                <EventCard source={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}></EventCard>
            </Marquee>
        </div>
    </section>
  )
}

export default PastEvents