import React from 'react';

const About = () => {
  return (
    <section id="about" className="mt-16 flex items-center justify-center px-6 py-4 ">
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-8">
       
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-green-600">🌴 What is it?</h2>
            <p className="ml-8 mt-4 text-lg">IslandHacks is a 12-hour hackathon meant for students in Alameda to code and win prizes!</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-green-600">🖥️ What you'll learn</h2>
            <p className="ml-8 mt-4 text-lg">Learn coding languages such as Python, HTML, and Javascript to develop projects independantly</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600">🤝 Who you'll meet</h2>
            <p className="ml-8 mt-4 text-lg">Many cool people and friends who are interested in engineering and problem solving.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;