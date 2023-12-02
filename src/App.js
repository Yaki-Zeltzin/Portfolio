import React from 'react'
import './App.css';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
    </>
  );
}

export default App;
