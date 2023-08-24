import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
reportWebVitals();
