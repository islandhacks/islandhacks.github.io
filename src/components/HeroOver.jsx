import React from "react"


const HeroOver = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-left ">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            
            <p className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-600 font-semibold mb-4">Stay Tuned!</p>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              IslandHacks
            </h1>
            <p className="mt-2 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
              Thanks for attending!
            </p>
            

            <p className="mt-6 text-gray-600 max-w-xl mx-auto md:mx-0">
              We had a fantastic time hosting IslandHacks 2025! Stay tuned for updates on future events and opportunities to code, collaborate, and win prizes.
            </p>

            
                        

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 max-w-sm mx-auto md:mx-0">
              <a
                href="https://photos.app.goo.gl/sHEefNXz6MLxtCoa7"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-400 text-white font-medium rounded-lg shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Photos
              </a>

             
            </div>
          </div>

          {/* Right: decorative illustration */}
         
        </div>
      </div>
    </section>
  )
}

export default HeroOver;

/*
<h1 className="mb-6 max-w-4xl lg:max-w-6xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Connecting {' '}
            <span className="leading-snug bg-gradient-to-r from-teal-200 to-sky-500 bg-clip-text text-transparent">
              physical therapists
            </span>
             {' '}with their {' '}
            <span className="leading-snug bg-gradient-to-r from-teal-200 to-sky-500 bg-clip-text text-transparent">
              patients
            </span>
          </h1>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-10">
              <strong className="leading-8 bg-gradient-to-r from-teal-300 to-sky-600 bg-clip-text text-transparent">Doctors:</strong> Assign exercises, track progress, and stay connected with your patients.<br />
              <strong className="bg-gradient-to-r from-teal-300 to-sky-600 bg-clip-text text-transparent">Patients:</strong> Access personalized routines, log your workouts, and guaruntee good form.
            </p>
            <div className="text-center">
                        <p className="text-lg text-gray-500 mb-10 w-140 mx-auto">Learn to code, or practice coded, by creating awesome projects with your friends and winning prizes!</p>
                    </div>
          </div>*/