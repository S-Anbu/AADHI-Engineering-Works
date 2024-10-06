import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import { NavbarIndex } from './Components/Navbar/Navbar'

function App() {

  return (
    <>
    <div>
      <NavbarIndex/>
    </div>
    <Home/>
    <About/>

    </>
  )
}

export default App
