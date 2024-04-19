import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { BulletinBoard } from './components/BulletinBoard/BulletinBoard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <BulletinBoard />
      </body>
    </div>
  );
}

export default App;
