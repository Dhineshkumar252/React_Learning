import './registeri.css'
import './Log.js'
import { TextField,Button } from '@mui/material'
import {Link} from 'react-router-dom'
import './Log'
import mail from './mail.png'
import man from './man.png'
import pwd from './pwd.png'

const Register = () => {
    const prom = () =>{
        alert("Your Account was successfully created.")
    }
  return (
    <div>
        <div className='cr'>CREATE ACCOUNT</div>
        <div className='create'>
 <div  className='email'>
                <img className='mail' src={mail} alt="r"/>
                {/* <p /> */}
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                {/* <input type="email" className="input" placeholder='EMAIL' required></input> */}
        </div>
        <div className='urname'>
                <img className="image-2" src={man} />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                {/* <input type="text" className="input" placeholder='USERNAME' required></input> */}
        </div>
        <div className='pwd'>
                <img className="image-3" src={pwd}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                {/* <input type="password" className="input" placeholder="PASSWORD"required></input> */}
        </div>
        <div className='cpwd'>
                <img className="image-4" src={pwd}/>
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                {/* <input type="password" className="input" placeholder="CONFIRM PASSWORD" required></input> */}
        </div>
        <div className='box'>
                    <input type="checkbox" className='boxx' ></input>
                  <span className='terms'>I do accept the Terms and Conditions. </span>
        </div>
        
   
        <Button className="rectangle-27" onClick={prom}>
          <a className='ar'><Link to="/Log">CREATE ACCOUNT</Link></a>
        </Button>
        </div>
      <span className="or">OR</span>
      <div className="flex-container-6">
        <a href="https://accounts.google.com/AccountChooser/signinchooser?visit_id=638045369851878260-3008553666&continue=https%3A%2F%2Fsupport.google.com%2Fcorpengkb%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">
            <p className="image-19"  />
        </a>
        <a href='https://www.facebook.com/login/'>
         <p className="image-22" src="" />
        </a>
        <a href='https://twitter.com/i/flow/login'>
        <p className="image-24" src="" />
        </a>
      </div>
    </div>
  );
};
export default Register;
