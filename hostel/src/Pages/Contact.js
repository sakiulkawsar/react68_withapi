import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Contact() {

const [inputs, setInputs] =useState({});

function handleChange(e){
  let name = e.target.name;
  let value = e.target.value;
  setInputs(values => ({...values , [name]:value}))
}
// console.log(inputs);

function handleSubmit(e){
  e.preventDefault();
  blogPost();
}

const blogPost = () => {
  axios.post('http://localhost/kawsar/admin/includes/blog/addBlog.php', inputs).then(function(response){
        alert(response.data);
  })

}

  return (
   <div className="container" style={{ padding: "200px" }}>
        <h1>Client contact page</h1>

       <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={inputs.name || ""}
      onChange={handleChange}
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label>Email:</label>
    <input
      type="text"
      name="email"
      value={inputs.email || ""}
      onChange={handleChange}
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label>Mobile:</label>
    <input
      type="text"
      name="mobile"
      value={inputs.mobile || ""}
      onChange={handleChange}
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label>Comment:</label>
    <textarea
      name="comment"
      value={inputs.comment || ""}
      onChange={handleChange}
      className="form-control"
    ></textarea>
  </div>

  <div className="form-group">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

        {console.log(inputs)}
    </div>
  )
}

export default Contact;
