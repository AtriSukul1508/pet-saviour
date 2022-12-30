import React from 'react';
import {NavLink} from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import logo from '../images/logo.png';


const Navbar = () => {
    // const [icon,setIcon] = useState({
    //     home:<HomeIcon/>,
    //     donate:<BloodtypeIcon/>,
    //     login:<LoginIcon/>,
    //     signup:<PersonAddIcon/>
    // })
    // const [active,setActive] = useState({
    //     home:false,
    //     donate:false,
    //     login:false,
    //     signup:false
    // });
  return (
    <>
        <div className='navbar'>
            <div className='left__nav' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'6px'}}><NavLink to='/' className='heading'>pet<span>S</span>aviours</NavLink><img src={logo} alt='logo' width='55px' height='55px'></img> </div>
            <div className='right__nav' >
                <NavLink className={({isActive})=>isActive?'active__class':'non__active__class'} to='/' end>Home</NavLink>
                <NavLink className={({isActive})=>isActive?'active__class' :'non__active__class'} to='/donate'> Donate</NavLink>
                <NavLink className={({isActive})=>isActive?'active__class' :'non__active__class'} to='/contact'> Contact</NavLink>

                <div className='auth__class'>
                  <NavLink className={({isActive})=>isActive?'active__class_login login__class':'login__class non__active__class_login'} to='/login'><LoginIcon className='icon' style={{fontSize:'13px'}}  /> Login</NavLink>
                  <NavLink className={({isActive})=>isActive?'active__class_signup signup__class':'signup__class non__active__class_signup'}  to='/signup'><PersonAddIcon className='icon' style={{fontSize:'13px'}}/> Signup</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar;