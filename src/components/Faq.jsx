import React from 'react'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';



const Faq = () => {
    const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "What is a hackathon? What if I've never coded before?",
      answer: `A hackathon is a social coding event where students first learn, then collaborate with others to create projects based on a specific theme (e.g. "code something that would benefit your everyday life").`
    },
    {
      id: 2,
      question: "Where is IslandHacks going to be held?",
      answer: "This year, IslandHacks is going to be hosted at offices owned by Exelixis, a biotech company located on Bay Farm Island. The address is 1851 Harbor Bay Pkwy, Alameda, CA 94502"
    },
    {
      id: 3,
      question: "Who can participate?",
      answer: "IslandHacks is open to all high school students in Alameda! This hackathon is unfortunately not open to alumni or students outside of Alameda."
    },
    {
      id: 4,
      question: "How much does it cost?",
      answer: "IslandHacks is completely FREE! We provide meals, snacks, and drinks for all attendees, as well as other prizes!"
    },
    {
      id: 5,
      question: "Who runs this? Is it supervised?",
      answer: "IslandHacks is completely led by students, but we'll have plenty of supervisors on hand! Last year, our event was supervised by AUSD parents, teachers, and other staff members, and this year we'll also have staff from Exelixis supervising!"
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faqs" className='flex justify-center'>
        <div className='px-8 max-w-5xl'>
            <h2 className='text-3xl font-bold text-amber-400 text-center mb-4'>Frequently Asked Questions</h2>
            <div className="space-y-4">
        {faqData.map((item, index) => (
  <div
    key={item.id}
    className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
  >
    <button
      onClick={() => toggleItem(item.id)}
      className="w-full px-6 py-5 text-left hover:bg-gradient-to-r  focus:outline-none focus:ring-0 focus:bg-gradient-to-r  transition-all duration-200"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4 transition-colors">
          {item.question}
        </h3>
        <div className="flex-shrink-0">
          <ChevronDown
            className={`h-6 w-6 text-amber-400 transition-all duration-300  group-hover:scale-110 ${
              openItems.has(item.id) ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </div>
    </button>
    
    <div
      className={`transition-all duration-300 ease-in-out ${
        openItems.has(item.id)
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0'
      } overflow-hidden`}
    >
      <div className="px-6 pb-6 text-gray-700 leading-relaxed bg-gradient-to-r from-amber-50/30 to-yellow-50/30">
        <div className="border-t border-gray-200/50 pt-4">
          {item.answer}
        </div>
      </div>
    </div>
  </div>
))}
</div>
    
        </div>
    </section>
  )
}

export default Faq