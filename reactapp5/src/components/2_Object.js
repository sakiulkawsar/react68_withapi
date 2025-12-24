import React from 'react'
import { name,age } from './5_Export_import';


function MyObject() {
    const users = [
        {id:1, name:"Rakib", age:222},
        {id:2, name:"Rayhan", age:555},
        {id:3, name:"Imran", age:999}
    ];
  return (

    <div>
        <h1>Users</h1>
        <ul>
        {
        users.map(user=>{
            return(<li key={user.id}>{user.id}: {user.name}: {user.age}</li>)
        })
        }
        </ul>

        <h1>We Imported Name, Age From 5_Export_import.js</h1>
        <h2>My name is {name} And my age is {age}</h2>


    </div>

  )
}

export default MyObject