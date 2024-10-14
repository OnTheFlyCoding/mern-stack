import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import GoalForm from '../components/GoalForm'



function Dashboard(){
    const navigate = useNavigate()
    const {user} = useSelector((state)=> state.auth)
    useEffect(()=> {
        if(!user){
            //if not logged in, redirect to login page
            navigate('/login')
        }
    },[user, navigate])
    return(
        <>
        <section className="heading">
             <h1>
                Welcome, {user && user.name}
             </h1>
             <p>Goals Dashboard</p>
        </section>
        <GoalForm/>
        </>
    )
}
export default Dashboard