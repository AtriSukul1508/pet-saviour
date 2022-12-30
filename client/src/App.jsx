import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Donate from './components/Donate'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'
import Error from './components/Error';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const location = useLocation();
  return (
    <>
      {(location.pathname === '/login' || location.pathname === '/signup') ?
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Error />} />
        </Routes> :
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<Error />} />

          </Routes>
        </>}
    </>
  )
}

export default App;