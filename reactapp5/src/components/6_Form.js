import React, { useState } from 'react'

function MyForm() {

  const [name, setName]= useState("Rayhan");

//   function handleChange(e){}
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name);
    }
    

  return (
    <><br/>
    <div>Form</div> 
    <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={name} placeholder='Enter Your name'/> <br/><br/>
        <input type='submit' />
    </form>
    </>

  )
}

export default MyForm