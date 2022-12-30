import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const AccordionItem = ({id,question,myth,fact}) => {
    const [open,setOpen] = useState(false);
  return (
    <>
    <div className='accordion-heading'>
        <IconButton style={{background:'rgb(200,200,200)'}} onClick={()=>setOpen(!open)}>{open?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon/>}</IconButton>
        <h3><span style={{fontWeight:'bold',color:'#7f00ff'}}>Question:</span>{question}</h3>
    </div>
    {open && <div className='answers' style={{display:'flex',flexDirection:'column',}}><p ><span style={{fontWeight:'bold',color:'#cc2424'}}>Myth:</span> {myth}</p><p><span style={{fontWeight:'bold',color:'#105538'}}>Fact: </span>{fact}</p></div>}
    </>
  )
}
export default AccordionItem;
