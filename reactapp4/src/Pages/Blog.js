import axios from 'axios';
import react from 'react'
import React,{useEffect, useState} from 'react'

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    getBlogItems()
  })

  function getBlogItems(){
    axios.get('http://localhost/api/blog/').then(function(response){
      //console.log(response.data);
      setBlogs(response.data)
    })

  }



  return (
    <>
    <div className='container mt-5'>

       <div className='container'>
        <h1>Blog Items</h1>
        {/* {console.log(blogs)} */}
        <table className='table table-bordered'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
          {blogs.map((blog)=>(
            <tr>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.details}</td>
            </tr>
          ))}
        </table>
        
       </div>
    </div>
    </>
  )
}

export default Blog
