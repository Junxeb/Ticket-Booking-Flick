import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBooking from "./pages/MyBookings";
import Favorites from "./pages/Favorites";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddShow from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBooking from "./pages/admin/ListBooking";

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
        <>

          <Toaster/>

          {/*ส่วนของ Navbar */}
          {!isAdminRoute && <Navbar/>}
          <Routes>
            <Route path ='/' element={<Home/> } />
            <Route path ='/movies' element={<Movies/> } />
            <Route path ='/movies/:id' element={<MovieDetails/> } />
            <Route path ='/movies/:id/:date' element={<SeatLayout/> } />
            <Route path ='/my-bookings' element={<MyBooking/> } />
            <Route path ='/favorite' element={<Favorites/> } />

            {/* ส่วนหน้าเว็บของ admin */}
            <Route path='/admin/*' element={<Layout />}>
              <Route index element={<Dashboard />}/>
              <Route path='add-shows' element={<AddShow />}/>
              <Route path='list-shows' element={<ListShows />}/>
              <Route path='list-bookings' element={<ListBooking />}/>
            </Route>
          </Routes>
        
          {/*ส่วนของ Footer */}
          { !isAdminRoute &&  <Footer />}

        </>
    )
}

export default App;