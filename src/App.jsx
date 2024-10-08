import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Whatsapp from './Components/Contact/Whatsapp'
import Footer from './Components/footer/Footer'
import Footerindex from './Components/footer/Footerindex'
import Home from './Components/Home/Home'
import { NavbarIndex } from './Components/Navbar/Navbar'
import ElectricalServices from './Components/services/ElectricalServices'
import Serviceindex from './Components/services/Serviceindex'

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
      <Whatsapp/>
      <Contact />
      <Footerindex />
      <Footer />

    </>
  )
}

export default App
