import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './components/Header';
import CardCategory from './components/CardCategory';
import CardProducts from './components/CardProducts';
import CardBlog from './components/CardBlog';
import SocialMedia from './components/SocialMidia';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CardCategory />
    <CardProducts />
    <CardBlog />
    <SocialMedia />
  </React.StrictMode>
);

reportWebVitals();
