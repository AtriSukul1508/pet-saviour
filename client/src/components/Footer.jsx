import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord,faFacebook,faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../images/logo.png'
const Footer = () => {
    const iconStyle = {fontSize:'24px',color:'#1d865a',cursor:'pointer'}
    return (
        <>
            <div className='footer__container'>
                <div className='footer__heading'><h2><span style={{color:'#1d865a'}}>pet</span><span style={{color:'#cc2424'}}>S</span>aviours</h2><img src={logo} alt='logo' width='65px' height='65px'/></div>
                <div className='footer__content'>
                    <div className='footer__left'>
                        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                            <h4 style={{color:'#cc2424',fontSize:'19px',textAlign:'center',fontFamily:'cursive'}}>About Us</h4>
                            <p style={{color:'white',fontFamily:'DynaPuff'}}>We are pet saviours, here to help your pet</p>
                            <div style={{display:'flex',gap:'10px',justifyContent:'center'}}>
                            <NavLink style={{textDecoration:'none',color:'#1d865a',fontSize:'18px',fontWeight:'bold'}} to='/'>Home</NavLink>
                            <NavLink style={{textDecoration:'none',color:'#1d865a',fontSize:'18px',fontWeight:'bold'}} to='/donate' >Donate</NavLink>
                            </div>
                        </div>
                        <div>
                            <h2 style={{color:'white'}}>Get In Touch</h2>
                            <ul>
                                <li><FontAwesomeIcon  style={iconStyle} icon={faDiscord} /></li>
                                <li><FontAwesomeIcon style={iconStyle} icon={faFacebook} /></li>
                                <li><FontAwesomeIcon style={iconStyle} icon={faTwitter} /></li>
                                <li><FontAwesomeIcon style={iconStyle} icon={faGithub} /></li>
                            </ul>
                        </div>

                    </div>
                    <div className='footer_right'>
                        <h3 style={{color:'white',fontSize:'25px'}}>Join</h3>
                        <h4 style={{color:'rgb(175 114 237)'}}>Join Us in this revolution</h4>
                        <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
                            <input type='email' placeholder='Email Address' id='footer__email' />
                            <button id='footer__btn' >Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;