import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import Footerindex from './Components/footer/Footerindex'
import Home from './Components/Home/Home'
import { NavbarIndex } from './Components/Navbar/Navbar'
import ElectricalServices from './Components/services/ElectricalServices'
import Serviceindex from './Components/services/Serviceindex'
import Services from './Components/services/Services'

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
      <Services/>
      <Contact />
      <Footerindex />
      <Footer />

    </>
  )
}

export default App
