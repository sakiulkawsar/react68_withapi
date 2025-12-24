import React from 'react'

function Destructuring() {

    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [x,y,z] = vehicles;

  return (
    <div>
        <h1>Vehicles</h1>
        Car {x} <br/>
        Model {y} <br/>
        Jani na {z}
    </div>
  )
}

export default Destructuring