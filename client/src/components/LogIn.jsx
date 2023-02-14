import React, { useState } from 'react';
import bg from '../images/login_bg.png';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/login.css';
import { useNavigate, NavLink } from 'react-router-dom';
const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const verfiyAndPostData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/signin', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email, password })
      })
      const data = await res.json();
      if (res.status === 422 || res.status === 401 || res.status === 400 || !data) {
        console.log(res.status);
        console.log(data);
        console.log('User login unsuccessfull');
      }
      else {
        console.log("User logged in successfully");
        navigate('/donate');
      }
    } catch (err) {
      console.log(`Error while loging in - ${err}`);
    }
  }
  return (
    <>
      <div className='login__container'>
        <div className='login__content'>
          <div className='login__left'><img src={bg} alt='background' width='400px' height='400px' /></div>
          <form method='POST' id='login__right' className='login__right'>
            <img src={logo} alt='logo' width='75px' height='75px' />
            <h2>Welcome</h2>
            <div style={{ margin: '10px' }}>
              <div style={{ position: 'relative' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '6px', color: '#105538' }} icon={faUser} />
                <input type='email' id='login__email' name='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
            </div>
            <div style={{ margin: '10px' }}>
              <div style={{ position: 'relative', margin: '3px 0px' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '6px', color: '#105538' }} icon={faLock} />
                <input type='password' id='login__password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
              <a href='#' style={{ textDecoration: 'none', color: 'rgb(150,150,150)' }}>Forget password ?</a>
            </div>
            <div><input type='submit' name='login__btn' className='login__btn' id='login__btn' onClick={verfiyAndPostData} value='Login' />
              <p className='mt-3' style={{ color: '#7f00ff' }}>Don't have an account? <NavLink style={{ textDecoration: 'none', color: '#105538', fontWeight: 'bold' }} to='/signup'>Sign Up</NavLink></p>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn;

