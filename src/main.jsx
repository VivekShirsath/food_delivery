import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter} from "react-router-dom";
import {LocationProvider} from './context/Locationcontext.jsx';
import {RestauarantProvider} from './context/Restaurantcontext.jsx';
import { CartProvider } from "./context/cartcontext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <LocationProvider>
    <RestauarantProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </RestauarantProvider>
  </LocationProvider>
  </BrowserRouter>
  </StrictMode>
)
