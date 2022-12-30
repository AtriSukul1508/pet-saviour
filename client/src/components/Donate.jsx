import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import DonorInfo from './DonorInfo';
import bg from '../images/blood_background_donatee.png';
import ErrorIcon from '@mui/icons-material/Error';
import Footer from './Footer';
import DonorCard from './DonorCard';
import { useNavigate } from 'react-router-dom';


const Donate = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [animal, setAnimal] = useState('dog');
  const donorList = JSON.parse(localStorage.getItem(animal));
  const openDialog = () => {
    setOpen(true);
  }
  const handleChange = (event) => {
    setAnimal(event.target.value);
  };

  return (
    <>
      <div className='donor__container'>
        <div className='donor__container__header'>
          <div className='select__box'>
            <h3 style={{ fontWeight: 'bold', color: '#105538', fontSize: '22px', marginBottom: '8px' }}>Select an Animal</h3>
            <FormControl style={{ width: 250, height: 10 }}>
              <InputLabel id="demo-simple-select-label" style={{ height: 30 }}>Animal</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={animal}
                label="Animal"
                onChange={handleChange}
              >
                <MenuItem value='dog'>Dog</MenuItem>
                <MenuItem value='cat'>Cat</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='add__donor__btn'>
            <Button variant='outlined' style={{ textTransform: 'unset', color: '#cc2424', borderColor: '#cc2424' }} onClick={openDialog}><BloodtypeIcon /> Add New Donor</Button>
          </div>
        </div>
        <div className='donors'>
          {((localStorage.getItem(animal)) === null) ? <div className='no_donor' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0' }}>
            <img src={bg} alt='background_image' width='300px' height='300px' /><span style={{ color: '#cc2424', display: 'flex', fontFamily: 'cursive', fontSize: '18px' }}><ErrorIcon />There is no donor currently</span></div>
            : donorList.map((item, ind) => {
              return <DonorCard name={item.name} age={item.age} breed={item.breed} gender={item.gender} type={item.type} bloodtype={item.bloodtype} owner={item.owner} contact={item.contact} email={item.email} key={ind} />
            })}


        </div>
        <DonorInfo open={open} setOpen={setOpen} />
        <Footer />
      </div>
    </>
  )
}

export default Donate;


