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
import Sites from '../Pages/Sites';
import TsitesPage from '../Pages/TsitesPage';
import SinglesitePage from '../Pages/SingleSitePage';
import AdminLogin from '../Pages/AdminLogin';
import AdminDashboard from '../Pages/AdminDashboardPage';
import AddSite from '../Pages/Addsite';
import AddAgent from '../Pages/NewAgent';

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
           <Route path="/sites/:cityId" element={<Sites/>}></Route> 
           <Route path="/site/ssite/:siteId" element={<SinglesitePage/>}></Route>
           <Route path="/sites/tourism_type/:tourismType" element={<TsitesPage/>}></Route> 
           <Route path="/admin" element={<AdminLogin/>}></Route> 
           <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route> 
           <Route path="/addsite" element={<AddSite/>}></Route>
           <Route path="/addagent" element={<AddAgent/>}></Route>  
           
      </Routes>
       <Footer/>
      </div>
    )
  }
  export default AllRoutes;