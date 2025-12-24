import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Array_map from './components/1_Array_map';
import MyObject from './components/2_Object';
import Destructuring from './components/3_Destructuring';
import Spread from './components/4_Spread';
import MyForm from './components/6_Form';
import Form_object from './components/7_Form_object';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Array_map /> */}
    {/* <MyObject /> */}
    {/* <Destructuring /> */}
    {/* <Spread /> */}
    {/* <MyForm /> */}
    <Form_object />
  </React.StrictMode>
);

reportWebVitals();
