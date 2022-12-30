import React, { useState } from "react";
import {faqs} from '../faq';
import AccordionItem from "./AccordionItem";

const Accordion = () =>{
    const [question,setQuestion] = useState(faqs);
    return (<>
    <section className="accordion">
    <h1>Frequently Asked Questions</h1>
        {question.map((ques)=><AccordionItem key={ques.id} {...ques}/>)}
    </section>
    </>)
}
export default Accordion;