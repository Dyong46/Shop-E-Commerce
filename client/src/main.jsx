import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './Context/index.js';
import { PriceProvider } from '~/Context/ContextCart/PriceCartContext.jsx';
import { CartProvider } from './Context/ContextCart/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <CartProvider>
          <PriceProvider>
            <App />
          </PriceProvider>
        </CartProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
