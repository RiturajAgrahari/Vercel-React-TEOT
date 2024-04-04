import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/home_page/navigationBar/navbar';
import MainVideo from './components/home_page/firstViewPage/thumbnailvideo';
import Devblog from './components/home_page/news/devblog';
import Slider from './components/home_page/Slider/slider';
import PreRegister from './components/home_page/preRegister/preregister';
import Footer from './components/home_page/footer/footer';
import Fix from './components/home_page/description/fix';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainVideo />
        <Fix />
        <Slider />
        <Devblog />
        <PreRegister />
        <Footer />
    </div>
  );
}

export default App;
