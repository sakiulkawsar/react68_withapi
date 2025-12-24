import React from 'react'

function Car(props) {
 
  const {brand, year, ...rest} = props;
  const welcome = () => {
    alert("Welcome to car page");
  }

  const cars = ["BMW", "Audi", "Mercedes"];
  return (
    <>
    
    <div>About Car</div>
    <p>Brand: {brand}</p>
    <p>Brand: {year}</p>
    <p>Brand: {rest.color}</p>

  <button onClick={welcome}>Click here</button>


  <ul>
   {cars.map((car) => <li>I am a { car }</li>)}
  </ul>

       {/* <p>Brand: {x.carinfo.brand}</p>
      <p>Year: {x.carinfo.year}</p>
      <p>Color: {x.carinfo.color}</p>
      <p>Brand: {x.brand}</p>
      <p>Brand: {x.year}</p>
      <p>Brand: {x.color}</p>
      <p>wheels: {x.wheels}</p> */}
      </>
   
  )
}

export default Car