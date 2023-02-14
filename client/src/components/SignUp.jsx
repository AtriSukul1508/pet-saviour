import React, { useState } from 'react';
import bg from '../images/login_bg.png';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import '../styles/signup.css';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: ""
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser(prevVal => { return { ...prevVal, [name]: value } })
    console.log(user);
  }
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmpassword } = user;
    try {
      const res = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, password, confirmpassword })
      })
      const data = await res.json();
      if (res.status === 422 || res.status === 401 || res.status === 400 || !data) {
        console.log(res.status);
        console.log(data);
        console.log("Invalid registration");
      }
      else {
        console.log("User registered successfully")
        console.log(data);
        navigate('/');
      }
    } catch (err) {
      console.log(`Error while creating your account -${err}`);
    }
  }
  return (
    <>
      <div className='signup__container'>
        <div className='signup__content'>
          <div className='signup__left'>
            <h2><span style={{ color: '#1d865a' }}>pet</span><span style={{ color: '#cc2424' }}>S</span>aviours</h2>
            <img src={bg} alt='background' width='400px' height='400px' /></div>
          <form method='POST' id='signup__right' className='signup__right'>
            <img src={logo} alt='logo' width='65px' height='65px' />
            <h3>Create an account</h3>
            <div style={{ margin: '7px' }}>
              <div style={{ position: 'relative' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '12px', color: '#105538' }} icon={faUser} />
                <input type='text' id='signup__name' placeholder='Enter your name' name='name' onChange={handleInput} value={user.name} />
              </div>
            </div>
            <div style={{ margin: '7px' }}>
              <div style={{ position: 'relative' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '12px', color: '#105538' }} icon={faEnvelope} />
                <input type='email' id='signup__email' placeholder='Enter your Email' name='email' onChange={handleInput} value={user.email} />
              </div>
            </div>
            <div style={{ margin: '7px' }}>
              <div style={{ position: 'relative' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '12px', color: '#105538' }} icon={faPhone} />
                <input type='number' id='signup__num' placeholder='Enter your Mobile No.' name='phone' onChange={handleInput} value={user.phone} />
              </div>
            </div>
            <div style={{ margin: '7px' }}>
              <div style={{ position: 'relative', margin: '3px 0px' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '12px', color: '#105538' }} icon={faLock} />
                <input type='password' id='signup__password' placeholder='Create a password' name='password' onChange={handleInput} value={user.password} />
              </div>
            </div>
            <div style={{ margin: '7px' }}>
              <div style={{ position: 'relative', margin: '3px 0px' }}>
                <FontAwesomeIcon style={{ position: 'absolute', left: '1px', top: '12px', color: '#105538' }} icon={faLock} />
                <input type='password' id='signup__confirm__password' placeholder='Re-enter password' name='confirmpassword' onChange={handleInput} value={user.confirmpassword} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6px' }}><input type='submit' name='signin_btn' className='signup__btn' onClick={registerUser} value='Sign Up' />
              <p style={{ color: '#7f00ff' }}>Already have an account? <NavLink style={{ textDecoration: 'none', color: '#105538', fontWeight: 'bold' }} to='/login'>Log in</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;