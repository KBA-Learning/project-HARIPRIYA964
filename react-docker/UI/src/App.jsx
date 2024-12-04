import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Home from './Pages/User/Home'
import About from './Pages/User/About'
import Services from './Pages/User/Services'
import Dashboard from './Pages/Admin/Dashboard'
import EventplanAdmin from './Pages/Admin/EventplanAdmin'
import EventPlan from './Pages/User/EventPlan'
import Decoration from './Pages/User/Decoration'

import DecorationAdmin from './Pages/Admin/DecorationAdmin'
import Reservation from './Pages/User/Reservation'
import Admindec from './Pages/Admin/Admindec'
import Viewdecoration from './Pages/Admin/Viewdecoration'
import ReservationAdmin from './Pages/Admin/ReservationAdmin'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/rsvp' element={<Reservation />} />
      <Route path='/admindashboard' element={<Dashboard />} />
      <Route path='/eventplanAdmin' element={<EventplanAdmin />} />
      <Route path='/eventPlan' element={<EventPlan />} />
      <Route path='/decoration' element={<Decoration />} />
      <Route path='/admindecoration' element={<DecorationAdmin />} />
     <Route path='/admindec' element={<Admindec />} />
     <Route path='/viewdecoration' element={<Viewdecoration />} />
     <Route path='/adminreservation' element={<ReservationAdmin />} />
      </>
    )
  )
    return (
   <RouterProvider router={router}/>
  )
}

export default App
