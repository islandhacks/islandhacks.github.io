import "./App.css";

import Faq from "./components/Faq.jsx";
import Navbar from "./components/navbar.jsx";
import PastEvents from "./components/PastEvents.jsx";

import About from "./components/About";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors.jsx";
import Schedule from "./components/Schedule.jsx";
import Info from "./components/Info.jsx";
import PreLaunch from "./components/PreLaunch.jsx";
import Countdown from "./components/Countdown.jsx";
/*


*/
import HeroOver from "./components/HeroOver.jsx";
import Resources from "./components/Resources.jsx";
import Rubric from "./components/Rubric.jsx";
import LiveScheduleBanner from "./components/LiveScheduleBanner.jsx";

function App() {
  return (
    <>
      <Navbar />
      <LiveScheduleBanner />
      <Rubric />
      <div className="px-4 pb-8"></div>
      <Resources />
      <Schedule></Schedule>
    </>
  );
}

export default App;
