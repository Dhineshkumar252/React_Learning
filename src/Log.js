import React from 'react'
import'./login.css'
import './Register.js';
import {Button,TextField} from '@mui/material'
import {Link} from 'react-router-dom'
import man from './man.png'

const Log = () => {
  const pro =() =>{
     alert("You Logged in Successfully");
  }
  return (
    <div className="original-login">
      <div className='cr'>LOGIN</div>
      <div className="login-box">
        <div className="flex-container">
           <p className="img2" ></p> 
           <TextField id="outlined-basic" type="email" label="Email" variant="outlined" />
          {/* <input type="email" className="r" placeholder='EMAIL'></input> */}
        </div>
        <div className="flex-container-1">
           <p className="img3" ></p>
          <span>
           <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
            {/* <input type="password" className='s' placeholder='PASSWORD'></input> */}
            </span>
        </div>
        <button className='rectangle-3' onClick={pro}>
         Login
        </button>
        <div>

        <span className="new-user-create-acco">New user? <a className='ir' id="rk" href='Register.js'><Link to="/Register">Create Account</Link></a></span>
        </div>
      </div>
         </div>
  );
}

export default Log
