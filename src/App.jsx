import './App.css'
import Home from './Components/Home/Home'
import { NavbarIndex } from './Components/Navbar/Navbar'

function App() {

  return (
    <>
    <div className='sticky top-0 z-50'>
      <NavbarIndex/>
    </div>
    <Home/>

    </>
  )
}

export default App
