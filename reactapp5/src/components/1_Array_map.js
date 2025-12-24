import React from 'react'

function Array_map() {
  const fruits = ["Mango", "Banana", "Apple", "Avocado"];
  return (
    <div>

      {
      //    peramitter =>
      // fruits.map(fruit => fruit)

      <ul>
        {fruits.map((myvalue, myindex, myarray) =>{

          return(
            <li key={myvalue}>
              Number: {myvalue}, Index: {myindex}, Array: {myarray}
            </li>
          )

        })
          
        }
      </ul>
      }

    </div>
  )
}

export default Array_map