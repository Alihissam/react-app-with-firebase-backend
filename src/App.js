import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './components/Contact';
import Addedit from './pages/Addedit';
import View from './pages/View';
import PageNotFound from './components/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer
      position="top-center" 
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
      
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Add" element={<Addedit/>}></Route>
      <Route path="/update/:id" element={<Addedit/>}></Route>
      <Route path="/view/:id" element={<View/>}></Route>
      <Route path="/about"element={<Contact/>}></Route>
      <Route path="*"element={<PageNotFound/>}></Route>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
