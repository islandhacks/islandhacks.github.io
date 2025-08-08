import React from "react"


const Hero = () => {

    return(
        <div>
            <div className="flex items-center justify-center w-full mt-8">
                <img src="/src/assets/islandhacks_hero_image.png" className="w-50 rounded-md rounded-xl shadow-lg"/>
                <div className="ml-10 block bg-yellow-50 rounded-xl shadow-lg">
                    <div className="m-8 text-6xl w-180 text-center">The {' '}
                        <span className="leading-snug bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Hackathon{' '}</span>
                        For All to Learn and {' '}
                        <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Have Fun!</span>
                    </div>
                    <div className="text-center">
                        <p className="text-lg text-gray-500 mb-10 w-140 mx-auto">Learn to code, or practice coded, by creating awesome projects with your friends and winning prizes!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;

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
          </div>*/