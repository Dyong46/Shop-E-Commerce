import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './Context/index.js';
import { AccountProvider } from '~/Context/Account/index.js';
import { PriceProvider } from '~/Context/ContextCart/PriceCartContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './Context/ContextCart/CartContext.jsx';
import AppProvider from './contexts/app.contexts';
import { AddressProvider } from './Context/Address/AddressContext.jsx';
import { DiscountProvider } from './Context/Discount/DiscountContext.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <AccountProvider>
            <AddressProvider>
              <DiscountProvider>
                <CartProvider>
                  <PriceProvider>
                    <AppProvider>
                      <App />
                    </AppProvider>
                  </PriceProvider>
                </CartProvider>
              </DiscountProvider>
            </AddressProvider>
          </AccountProvider>
        </StoreProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
