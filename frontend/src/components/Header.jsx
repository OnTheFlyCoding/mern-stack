import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {reset, logout} from '../features/auth/authSlice'
//create your Header tag using headerTag and other tags to design your header.
function Header(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    const {user} = useSelector((state)=> state.auth)
    return(
        // return a header that contains links to login and register page
        <header className='header'>
            {/* Logo will redirect you to the home page (root) */}
            <div className="logo">
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {user? (
                    <li>
                    <button className='btn' onClick={onLogout}>
                        
                        <FaSignOutAlt /> Logout!

                    </button>
                    </li>
                ):(<>
                <li>
                    <Link to='/login'>
                    <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                    <FaUser /> Register
                    </Link>
                </li>
                </>)}

            </ul>
        </header>
    )
}
export default Header;