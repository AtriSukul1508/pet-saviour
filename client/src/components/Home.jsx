import React ,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
import bg from '../images/background2.png';
import { Button } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Accordion from './Accordion';
import bg1 from '../images/background1.png';
import Criteria from './Criteria';

const Home = () => {
  const navigate = useNavigate();
  // const callAuth = async ()=>{
  //   try {
  //     const res = await fetch('/',{
  //       method:"GET",
  //       headers:{
  //         "Accept":"application/json",
  //         "Content-type":"application/json"
  //       },
  //       credentials:"include",
  //     });
  //     const data = await res.json();
  //     console.log(data)
  //     if(!res.status===200){
  //       console.log(res.error);
  //     }
  //     else{
  //       navigate('/');
  //     }
      
      
  //   } catch (err) {
  //     navigate('/login');
  //     console.log(`Error - ${err}`);
  //   }
  // }
  // // useEffect(() => {
  // //   callAuth();
  // // }, []);
  
  return (
    <>
      <div className='home__container'>
      <div className='home__container__upper'>
        <div className='home__right__side'>
          <h2 style={{color:'#7f00ff',fontSize:'35px',fontFamily:'DynaPuff'}}>Animal can give blood too!!</h2>
          <p style={{fontSize:'22px',width:'45vw',fontFamily:'cursive'}}>It's not just human donors who save lives. Animals can also come to the rescue when a fellow creature is in need.<br></br>Pet Owners <span style={{color:'#cc2424',fontWeight:'bold'}}>#Be_A_LifeSaver</span></p>
          <Button variant='contained' style={{background:'#105538',display:'flex',alignItems:'center',gap:'4px'}} onClick={()=>navigate('/donate')} ><BloodtypeIcon style={{color:'rgb(255 67 67)'}}/> Donate Now</Button>
        </div>
        <img src={bg} alt='background_image' width='400px' height='400px'/>
      </div>
      <div className='home__container__below'>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <h2 style={{fontSize:'40px',fontFamily:'Raleway'}}>Need Help ?</h2>
        <p style={{fontFamily:'Raleway',fontSize:'22px',color:'#7f00ff'}}>We've got you covered</p>
        <Accordion/>
      </div>
        <div style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center',justifyContent:'center'}}>
          <img src={bg1} alt='background__picture' width='350px' height='300px' />
          <h3 style={{color:'#cc2424',fontSize:'20px',fontFamily:'Raleway',textTransform:'uppercase'}}>Every unit of blood helps save up to four lives</h3>
          <Criteria/>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Home;