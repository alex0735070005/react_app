import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Router from './Router';
import Sidebar from './Sidebar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Router/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
