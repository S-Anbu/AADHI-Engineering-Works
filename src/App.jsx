import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import Footerindex from './Components/footer/Footerindex'
import Home from './Components/Home/Home'
import { NavbarIndex } from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <NavbarIndex />
      </div>
      <Home />
      <About />
      <Contact />
      <Footerindex />
      <Footer />

    </>
  )
}

export default App
