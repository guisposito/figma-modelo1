import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './components/Header';
import CardCategory from './components/CardCategory';
import CardProducts from './components/CardProducts';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CardCategory />
    <CardProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
