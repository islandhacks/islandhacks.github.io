import React from "react";

const resourceLinks = [
  { name: "JSFiddle", url: "https://jsfiddle.net" },
  { name: "CodePen", url: "https://codepen.io" },
  { name: "GitHub", url: "https://github.com" },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
  {name: "General web development resources", url: "https://github.com/iamismile/web-dev-resources"}
];

const Resources = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-left">
          <div className="text-center md:text-left w-full">
            <p className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-600 font-semibold mb-4">
              September 12 • Alameda, CA
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Resources
            </h1>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Website
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {resourceLinks.map(({ name, url }) => (
                    <tr key={name} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-800">
                        {name}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          className="text-green-600 underline decoration-green-400 underline-offset-2 transition hover:text-green-700"
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {url.replace("https://", "")}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;

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
