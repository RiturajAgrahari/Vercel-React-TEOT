import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/home_page/navbar';
import MainVideo from './components/home_page/thumbnailvideo';
import Devblog from './components/home_page/devblog';
import Slider from './components/home_page/slider';
import PreRegister from './components/home_page/preregister';
import Footer from './components/home_page/footer';
import Fix from './components/home_page/fix';

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
