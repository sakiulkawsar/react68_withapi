import React from 'react'

function Spread() {

    const vehicles = ['mustang', 'f-150', 'expedition', "red", "havy"];
    const [x,y, ...others] = vehicles;

    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];

  return (
    
    <div>
        <div>Spread Operator</div>
        <h1>Vehicles</h1>
        Car {x} <br/>
        Model {y} <br/>
        All {others} <br/>


        <h1>Spread Combined Check in Console</h1>
        
        {console.log(numbersCombined)}

    </div>
  )

}

export default Spread



 