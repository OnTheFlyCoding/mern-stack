import React from 'react';
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
function Login(){

    //Create your form fields that will be expected by the backend.
    //[0] the data entered. [1] the function to handle the data
    //Declare the field names as empty strings that will be propogated with data.
    const [formData, setData] = useState({
        //Only email and password required for login.
        email:'',
        password:''

    })
    //unpack data to use
    const { email, password} = formData
    //Functions for form and register page:

    //When something changes in the input, the onChange function will get called.
    //Takes the previous state of the fields from each individual field, references
    // the names as they change on each field
    const onChange = (e) =>{
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };
    //Decide what to do with the data
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
        {/* Heading for register page */}
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>
                Please fill in credentials
            </p>
        </section>
        <section className="form">
            {/* Form fields, depicted earlier */}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id='email'
                name='email' 
                value={email} 
                placeholder='Enter Your Email'
                onChange={onChange} />
                </div>

                <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id='password'
                name='password' 
                value={password} 
                placeholder='Enter Your Password'
                onChange={onChange} />
                </div>
                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className='btn btn-block'> Submit</button>
                </div>
            </form>
        </section>
        </>
    )
}
export default Login