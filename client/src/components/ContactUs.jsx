import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../images/login_bg.png';

import '../styles/contact.css';
const ContactUs = () => {
  // const [username, setName] = useState('')
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const navigate = useNavigate();

  //   let val = userData.name;
  // console.log(username)


  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  }
  return (
    <div class="contact_container">
      <div class="content">
        <div class="left-side">
          <img src={bg} alt='background' width='400px' height='400px' />
        </div>
        <div class="right-side">
          <div class="topic-text" style={{ fontSize: "30px", textTransform: "uppercase" }}>Send us a message</div>
          <form id="contact_form" method='POST'>
            <div class="input-box mt-4">
              <input type="text" name='name' placeholder="Enter your name" onChange={handleInputs} value={userData.name} />
            </div>
            <div class="input-box mt-4">
              <input type="email" name='email' placeholder="Enter your email" onChange={handleInputs} value={userData.email} />
            </div>
            <div class="input-box message-box mt-4">
              <textarea name='message' placeholder='Enter your message' onChange={handleInputs} value={userData.message} ></textarea>
            </div>
            <div class="button ">
              <input type="submit" name='message_btn' id='contact_btn' value="Send Message" onClick />
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default ContactUs;


