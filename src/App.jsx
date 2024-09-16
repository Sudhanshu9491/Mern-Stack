import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import SingIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/sign-in' element={<SingIn></SingIn>} ></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/profile' element={<Profile></Profile>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App