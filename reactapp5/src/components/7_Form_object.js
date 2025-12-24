import React, { useState } from 'react'


function Form_object() {
    // Take Multiple data
    const [inputs, setInputs] = useState({})
    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({
            ...values, [name]:value
        }));
    }
 
      return (
        <>
        <br/>
        <div>Registration Form</div> 
        <form>
            <input type='text' name='fullname' onChange={handleChange} placeholder='Enter name'/> <br/>
            <input type='number' name='age' onChange={handleChange} placeholder='Enter age'/> <br/>
            <select name='district' onChange={handleChange}>
                <option>Select One</option>
                <option>Dhaka</option>
                <option>Sirajganj</option>
            </select>

        </form>
        {console.log(inputs)}

 
        </>
    
      )
}

export default Form_object