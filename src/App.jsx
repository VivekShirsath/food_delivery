import { useState } from 'react'
import {  Routes , Route} from "react-router-dom";

import { Location } from "./components/Location.jsx";
import Body  from "./components/Body.jsx";
import Menu from "./components/Menu.jsx";
import {Cart} from './components/Cart.jsx';
import './App.css'

function App() {
  
  return (
    <div className="app">
        <Routes>
        <Route path="/" element={<Location />} />
         <Route path="/body" element={<Body />} /> 
          <Route path="/Relevance" element={<Body/>} />
           <Route path="/Cost: High to Low" element={<Body/>} />
           <Route path="/Cost: Low to High" element={<Body/>} />
           <Route path="/Ratings" element={<Body/>} />
          <Route path="/Delivery Time" element={<Body/>} />
           <Route path="/restaurants/:id" element={<Menu/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  )
}

export default App
