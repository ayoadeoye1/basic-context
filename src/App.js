import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Sign-in';
import Signup from './pages/Sign-up';
import { CounterProvider } from './context/globalState';



const App = () => {


  return (
    <CounterProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </CounterProvider>
  );
}


export default App;
