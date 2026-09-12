import React from "react";

const TIERS = [
  {
    tier: "Beginner",
    accent: "bg-emerald-500",
    requirements: [
      "Ex: scratch / block coding",
      "Simple idea that connects to sustainability",
      "Basic explanation of the project goal",
    ],
  },
  {
    tier: "Intermediate",
    accent: "bg-sky-500",
    requirements: [
      "Ex: simple HTML / CSS website (1–3 pages)",
      "Project includes a clear user-facing feature",
      "Some logic or interaction beyond a static mockup",
    ],
  },
  {
    tier: "Advanced",
    accent: "bg-amber-500",
    requirements: [
      "Complex multi-level architecture",
      "Must submit code to enter this tier",
      "Must cover technical details in the presentation",
      "Strong demonstration of sustainability impact",
    ],
  },
];

const Rubric = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Build something that relates to sustainability
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Create an original project that addresses a real-world
            sustainability challenge, improves environmental awareness, or makes
            a positive impact on the community.
          </p>
        </div>
         <div className="w-full flex justify-center items-center mb-4">
         <a
          href="https://tally.so/r/Pd701e"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-200 transition hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200"
        >
          Sign up
        </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map(({ tier, requirements, accent }) => (
            <div
              key={tier}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
            >
              <div
                className={`mb-4 inline-flex rounded-full ${accent} px-3 py-1 text-sm font-semibold text-white`}
              >
                {tier}
              </div>
              <ul className="space-y-3 text-left text-slate-700">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Rubric;

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
