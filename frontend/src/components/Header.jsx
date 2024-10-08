import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header(){
    return(
        // return a header that contains links to login and register page
        <header className='header'>
            {/* Logo will redirect you to the home page (root) */}
            <div className="logo">
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {/* Nav items with links to other pages */}
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
            </ul>
        </header>
    )
}
export default Header;