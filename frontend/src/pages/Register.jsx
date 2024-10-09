//Select something from the state(isLoading.etc)
//dispatch a function(register) or reset
//function from our reducer
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
//import features
import {register, reset} from '../features/auth/authSlice'
//Componenets
import Spinner from '../components/Spinner'

//Logic for registering a user
function Register(){
    //Create your form fields that will be expected by the backend.

    //The fields
    //[0] the data entered. [1] the function to handle the data

    //The values will be propgated with input on each field IRT.
    const [formData, setData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''

    })
    //unpack data to use
    const {name, email, password, password2} = formData
    //Functions for form and register page:
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //use the values assosciated with a state we defined
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth )

    //if any of the values change during the process [dependecies] dictate a change
    useEffect(()=>{
        if(isError) {
            toast.error(message)
        }
        //if user is true, means they have registered or are logged in, redirect
        if(isSuccess || user) {
            //redirect to home page
            navigate('/')
        }
        //useEffect fires during a change, once change has been made,
        //reset the values of the state
        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch, navigate])



    //When something changes in the input, the onChange function will get called.
    //Takes the previous state of the fields from each individual field, references
    // the names as they change on each field
    const onChange = (e) =>{
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    //Decide what to do with the data
    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== password2){
            toast.error('Passwords do not match')
        } else {
            //data coming from the form not including the confirmed password
            const userData = {
                name,
                email,
                password,
            }
            //if criteria is met, 
            dispatch(register(userData))
        }
    }
    if(isLoading){
        return <Spinner/>  
    }

    return(
        <>
        {/* Heading for register page */}
        <section className="heading">
            <h1>
                <FaUser /> Register
            </h1>
            <p>
                Please create an account
            </p>
        </section>
        <section className="form">
            {/* Form fields, depicted earlier */}
            <form onSubmit={onSubmit}>
                
                <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id='name'
                name='name' 
                value={name} 
                placeholder='Enter Your Name'
                onChange={onChange} />
                </div>

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

                <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id='password2'
                name='password2' 
                value={password2} 
                placeholder='Re-enter Password'
                onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'> Submit</button>
                </div>
            </form>
        </section>
        </>
    )
}
export default Register