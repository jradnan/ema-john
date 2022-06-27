import React from 'react';
import {signOut} from 'firebase/auth';
import logo from '../../images/Logo.svg'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';


const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>

            <img src={logo} alt="" />

            <div className='menu'>

                <Link to='/shop'>Shop</Link>
                <Link to='/Orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/About'>About</Link>


                {
                    user?
                    <button id='signout' onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to='/Login'>Login</Link>
                }


            </div>
        </nav>
    );
};

export default Header;