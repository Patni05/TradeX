import React from 'react';
import ReactDOM from 'react-dom/client';
import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import HomePage from './landing_page/home/HomePage';
import Pricing from './landing_page/home/Pricing';
import SignUp from './landing_page/signup/SignUp';
import SupportPage from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import ProductPage from './landing_page/products/ProductPage';
import LogIn from './landing_page/login/LogIn';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element = {<HomePage/>} />
      <Route path='/home' element = {<HomePage/>} />
      <Route path='/about' element = {<AboutPage/>} />
      <Route path='/pricing' element = {<PricingPage/>} />
      <Route path='/product' element = {<ProductPage/>} />
      <Route path='/support' element = {<SupportPage/>} />
      <Route path='/signup' element = {<SignUp/>} />
      <Route path='/login' element = {<LogIn/>} />
      <Route path='*' element = {<NotFound/>} />
    </Routes>

    <Footer/>

    </BrowserRouter>


);













