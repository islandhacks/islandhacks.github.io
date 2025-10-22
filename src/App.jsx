import './App.css'

import Faq from './components/Faq.jsx'
import Navbar from './components/navbar.jsx'
import PastEvents from './components/PastEvents.jsx'

import About from './components/About'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors.jsx'
import Schedule from './components/Schedule.jsx'
import Info from './components/Info.jsx'
import PreLaunch from './components/PreLaunch.jsx'

/*


*/


function App() {

  return (
    <>
   <Navbar />
<Hero />
    <About />
    <Info />
    
    <Schedule />
    <PastEvents />
    <Faq/>
    <Sponsors />
    

    </>
  )
}

export default App
