import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../Pages/Index';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Contactus from '../Pages/Contactus';
import About from '../Pages/About';
import FAQ from '../Pages/FAQ';
const AllRoutes = () => {
    return (
    <div>
      <Navbar />
      <Routes>
           <Route path='/'  element={<Index/>}></Route>
           <Route path='/register'  element={<RegisterPage/>}></Route>
           <Route path='/login'  element={<LoginPage/>}></Route>
           <Route path='/contactus'  element={<Contactus/>}></Route>
           <Route path='/aboutus'  element={<About/>}></Route>
           <Route path='/faq'  element={<FAQ/>}></Route>
           
      </Routes>
       <Footer/>
      </div>
    )
  }
  export default AllRoutes;