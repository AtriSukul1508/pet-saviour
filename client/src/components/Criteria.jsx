import React, { useState } from "react";
import { criterias } from "../faq";
import CriteriaItem from "./CriteriaItem";
import PetsIcon from '@mui/icons-material/Pets';

const Criteria = () => {
    const [criteria, setCriteria] = useState(criterias);
    const [open,setOpen] = useState(false);
    return (<>
        <section className="criteria">
            <h1 style={{display:'flex',alignItems:'center',gap:'8px',justifyContent:'center'}}><PetsIcon style={{color:'#105538'}}/>Can Your Dog Donate Blood?</h1>
            {criteria.map((criteria) => <CriteriaItem key={criteria.id} {...criteria}/>)}
        </section>
    </>)
}

export default Criteria;
        {/* <Crit key={ques.id} {...ques}/>)} */ }