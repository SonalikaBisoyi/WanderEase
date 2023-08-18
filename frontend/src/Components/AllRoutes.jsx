import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../Pages/Index';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AllRoutes = () => {
    return (
    <div>
      <Navbar />
      <Routes>
           <Route path='/'  element={<Index/>}></Route>
      </Routes>
       <Footer/>
      </div>
    )
  }
  export default AllRoutes;