import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CriteriaItem = ({ id, question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <><div className='criteria-heading'>
            <IconButton style={{ background: 'rgb(200,200,200)' }} onClick={() => setOpen(!open)}>{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton>
            <h3><span style={{ fontWeight: 'bold',color:'#7f00ff' }}>Question:</span>{question}</h3>
        </div>
            {open && <div className='criteria__answers' style={{ display: 'flex', flexDirection: 'column' }}><p><span style={{fontWeight:'bold',color:'#105538'}}>Answer: </span>{answer}</p></div>}</>
    )
}

export default CriteriaItem;
