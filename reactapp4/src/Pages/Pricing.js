import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Pricing() {

const [inputs, setInputs] =useState({});

function handleChange(e){
  let name = e.target.name;
  let value = e.target.value;
  setInputs(values => ({...values , [name]:value}))
}
function handleSubmit(e){
  e.preventDefault();
  blogPost();
}
const blogPost = () => {
  axios.post('http://localhost/kawsar/api/blog/addBlog.php', inputs).then(function(response){
        alert(response.data);
  })

}

  return (
    <div className='container'>
        <h1>Pricing page</h1>

        <form  onSubmit={handleSubmit}>
        <input type='text' name='title' value={inputs.title} onChange={handleChange} className='from-control' placeholder='Enter title'/> <br />

        <textarea name='details' value={inputs.details} onChange={handleChange} className='from-control'></textarea> <br />
        <input type='submit' className='btn btn-primary'/>
        </form>
        {console.log(inputs)}
    </div>
  )
}

export default Pricing
