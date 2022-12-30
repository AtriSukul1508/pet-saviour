import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';



const DonorInfo = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const initialInfo = {
    name: '',
    age: '',
    breed: '',
    gender: '',
    type: '',
    bloodtype: '',
    owner: '',
    contact: '',
    email: '',
  }
  const [info, setInfo] = useState(initialInfo)
  const regNum = /^[6-9]\d{9}$/gi;
  const regAge = /^[0-2]\d{1}$/gi;

  const getInfo = (event) => {
    const { name, value } = event.target;
    setInfo((prevVal) => ({ ...prevVal, [name]: value }))
  }
  const addDonor = () => {
    if ((regAge.test(info.age)) && (regNum.test(info.contact))) {
      setShow(true);
      const items = JSON.parse(localStorage.getItem(`${info.type.toLowerCase()}`) || "[]")
      items.push(info)
      localStorage.setItem(`${info.type.toLowerCase()}`, JSON.stringify(items));
      props.setOpen(false);
      setInfo(initialInfo);
      setError(false)
    }
    else {
      setError(true);
      setShow(false);
    }


  }
  // if(Object.values(info).every(item => item) &&){
  // setError(true)
  // }
  const handleClose = () => {
    props.setOpen(false);
  };
  console.log(info.age.length)
  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle style={{ color: '#105538', fontFamily: 'cursive', textAlign: 'center', fontWeight: 'bold' }}>Add New Donor</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: '#009955' }}>
            Please give us the following details to register yourself as a valid pet blood donor
          </DialogContentText>
          <TextField
            autoFocus
            autoComplete='off'
            margin="dense"
            label="Donor name"
            name="name"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.name}

          />
          <TextField
            autoComplete='off'
            margin="dense"
            label="Donor's age"
            name="age"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.age}
            error={error}

          /><TextField
            autoComplete='off'
            margin="dense"
            label="Donor's Breed"
            name="breed"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.breed}
          /><TextField
            autoComplete='off'
            margin="dense"
            label="Donor's gender"
            name="gender"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.gender}
          />
          <TextField
            autoComplete='off'
            margin="dense"
            label="Donor's type(e.g. Dog,Cat etc.)"
            name="type"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.type}
          />
          <TextField
            autoComplete='off'
            margin="dense"
            label="Donor's blood type"
            name="bloodtype"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.bloodtype}
          />

          <TextField
            autoComplete='off'
            margin="dense"
            label="Owner name"
            name="owner"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.owner}
          /><TextField
            autoComplete='off'
            margin="dense"
            label="Owner's Mobile Number"
            name="contact"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.contact}
            error={error}
          />
          <TextField
            autoComplete='off'
            margin="dense"
            label="Owner's Email Id"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            required
            onChange={getInfo}
            value={info.email}
          />
        </DialogContent>
        <DialogActions >
          <Button style={{ textTransform: 'unset', fontWeight: 'bold' }} onClick={handleClose}>Cancel</Button>
          <Button style={{ textTransform: 'unset', fontWeight: 'bold' }} onClick={addDonor} disabled={(Object.values(info).every(value => value)) ? show : !show}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default DonorInfo;