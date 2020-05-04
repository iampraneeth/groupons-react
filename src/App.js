import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
