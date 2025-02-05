import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import HealthPackages from './pages/HealthPackages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Payment from './pages/Payment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mc-4 sm:mx-[10%]'>
      <Navbar/>
      
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-Profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointments/:docId' element={<Appointment/>}/>
        <Route path ='/HealthPackages' element={<HealthPackages/>}/>
        <Route path ='/Payment' element={<Payment/>}/>

      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
