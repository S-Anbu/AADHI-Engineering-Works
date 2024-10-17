import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Whatsapp from './Components/Contact/Whatsapp'
import Footer from './Components/footer/Footer'
import Footerindex from './Components/footer/Footerindex'
import Home from './Components/Home/Home'
import { NavbarIndex } from './Components/Navbar/Navbar'
import { Termsandconditions } from './Components/payment/FinalTerms'
import ElectricalServices from './Components/services/ElectricalServices'
import PlumbingServices from './Components/services/PlumbingServices'
import Serviceindex from './Components/services/Serviceindex'
import WeldingServices from './Components/services/WeldingServices'
import { GalleryWithTab } from './Components/Works/GalleryWithTab'

function App() {

  return (
    <>
      <div>
        <NavbarIndex />
      </div>
      <Home />
      <About />
      <Serviceindex/>
      <ElectricalServices/>
      <WeldingServices/>
      <PlumbingServices/>
      <Whatsapp/>
      <GalleryWithTab/>
      <Contact />
      <Footerindex />
      <Footer />
    </>
  )
}

export default App
