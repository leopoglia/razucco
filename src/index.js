import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app.js';
import Header from './components/header';
import About from './components/about';
import Stats from './components/stats';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Stats />
      <About />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
