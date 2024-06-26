import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';

import Current from './pages/Current';
import Hours from './pages/Hours';
import Week from './pages/Week';
import Maps from './pages/Maps';

import WeatherStorage from './WeatherContext';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <WeatherStorage>
          <Header />
          <Routes>
            <Route exact path="/" element={<Current />} />
            <Route path="/hora" element={<Hours />} />
            <Route path="/7dias" element={<Week />} />
            <Route path="/mapas" element={<Maps />} />
          </Routes>
          <Footer />
        </WeatherStorage>
      </BrowserRouter>
    </>
  );
}
