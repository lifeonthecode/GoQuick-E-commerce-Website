
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Page/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>

      <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
