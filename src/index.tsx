import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import { NavBar } from './components/NavBar/NavBar';
import Experience from './pages/Experience/Experience';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <header>
        <NavBar />
      </header> */}
      <Routes>
        <Route path='/' element={<UnderConstruction />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about-me' element={<AboutMe />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/gallery' element={<UnderConstruction />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
