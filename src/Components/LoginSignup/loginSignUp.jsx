import React,{useState} from 'react';
import './loginSignup.css';


export const LoginSignUp = () => {

const [action,setAction] = useState('SignUp');

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div>{action==='Login'? <div></div> : <div className='input'>
                <img src="" alt="" />
            <input type='text' placeholder='  Name'></input>
            </div> }</div>
           
            <div className='input'>
                <img src='' alt="" />
            <input type='text' placeholder='  Email'></input>
            </div>
            <div className='input'>
                <img src="" alt="" />
            <input type='text' placeholder='  Password'></input>
            </div>
        </div>
      <div>{action==='SignUp'? <div></div> :   <div className="forgot-pass">Forgot password.. <span className='redirct'>Click Here!</span></div>}</div>
        <div className="submit-container">
            <div className={action==='Login'?'submit-grey':'submit'} onClick={()=>{
                setAction('SignUp')
            }}>SignUp</div>
            <div className={action==='SignUp'?'submit-grey':'submit'} onClick={()=>{
                setAction('Login')
            }}>Login</div>
        </div>
    </div>
  )
}
 export default LoginSignUp