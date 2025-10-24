import React from 'react'

const Schedule = () => {
    const schedule = [
        { time: '8:30 AM', activity: 'Doors Open' },
        { time: '9:00 AM', activity: 'Opening Ceremony' },
        { time: '12:30 PM', activity: 'Lunch Break' },
        { time: '1:45 PM', activity: 'Workshops Begin' },
        { time: '3:00 PM', activity: 'Career Panel' },
        { time: '5:00 PM', activity: 'Dinner Break' },
        { time: '7:00 PM', activity: 'Presentations Start' },
        { time: '8:00 PM', activity: 'Awards Ceremony' },
    ];

        return (
            <section id="schedule" className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight text-amber-400">
                        Schedule
                    </h2>
                    <div className="flex flex-col gap-4">
                        {schedule.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white rounded-xl shadow p-4">
                                <span className="font-medium text-lg text-gray-900">{item.activity}</span>
                                <span className="text-amber-500 font-semibold text-base bg-amber-50 rounded-full px-4 py-1">
                                    {item.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
}

export default Schedule