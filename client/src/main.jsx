import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './Context/index.js';
import { AccountProvider } from '~/Context/Account/index.js';
import { PriceProvider } from '~/Context/ContextCart/PriceCartContext.jsx';
import { CartProvider } from './Context/ContextCart/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <AccountProvider>
          <CartProvider>
            <PriceProvider>
              <App />
            </PriceProvider>
          </CartProvider>
        </AccountProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
