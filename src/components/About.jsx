import React from 'react';

const About = () => {
  return (
    <div className="mt-24 flex items-center justify-center px-6 py-4">
      <div className="max-w-3xl w-full bg-yellow-50 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-green-800">Hi, We Are IslandHacks! {/* Your Name */}</h1>
        <p className="text-lg mb-6 text-dark-green">
          {/* Insert a short, punchy intro here. Example: "A full-stack developer with a passion for clean code, clever hacks, and collaborative energy." */}
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-lime-900">🌴 What is it?</h2>
            <p className="ml-8 mt-4 text-lg">IslandHacks is a 12-hour hackathon meant for students in Alameda County to code and win prizes!</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-lime-800">🖥️ What you'll learn</h2>
            <p className="ml-8 mt-4 text-lg">Learn coding languages such as Python, HTML, and Javascript to develop projects independantly</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-lime-700">🤝 Who you'll meet</h2>
            <p className="ml-8 mt-4 text-lg">Many cool people and friends who are interested in engineering and problem solving.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;