import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import HomePage from './HomePage';

const Navbar = () => {
    const {isAuthorised, login, logout} =useContext(AuthContext);
  return (
    <div>
        <h3>Login to see data...</h3>
        <button onClick={()=>{
            if (isAuthorised) logout();
            else login ("R", "Z");
        }}>
            {isAuthorised ? "Logout" : "Login"}
        </button>

        <div>
            {isAuthorised? <HomePage/>:null}
        </div>
    </div>
  )
}

export default Navbar