import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Home from './Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Nav from './component/Nav';
import Car from './Car';
import Form from './Form';

function App() {
let wheels = 4;
let carinfo = {brand: "odi" , year: 2023, color: "red"};



  return (
    <BrowserRouter>
     
    <Nav></Nav>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/Car" element={<Car brand="toyota" wheels={wheels} carinfo={carinfo} model="camry" year="2020" color=" blue"/>} /> */}
        <Route path="/car" element={<Car brand="odi" year="2019" color="red"/>} />
        <Route path='/Form' element={<Form/>}/>
       

      </Routes>
    </BrowserRouter>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



