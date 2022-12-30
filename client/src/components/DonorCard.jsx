import React from 'react';
import bg from '../images/blood_background_donatee.png';

const DonorCard = (props) => {
    return (
        <>
            <div className='donor_info'>
                <div className='donor_img'>
                    <img src={bg} alt='donor_img' width='150px' height='150px' />
                </div>
                <div className='donor_info__container'>
                    <div style={{ width: '45vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h3 style={{ fontSize: '24px', color: '#105538', textDecoration: 'underline', fontFamily: 'cursive' }}>Donor Information</h3><div></div></div>
                    <ul className='donor__info_value' style={{ paddingLeft: '15px', }}>
                        <li>Donor Name:  <input className='info__field' name='name' type='text' value={props.name} /></li>
                        <li>Donor Age:  <input className='info__field' name='age' type='text' value={props.age} /></li>
                        <li>Donor Breed:  <input className='info__field' name='breed' type='text' value={props.breed} /></li>
                        <li>Donor Gender:  <input className='info__field' name='gender' type='text' value={props.gender} /> </li>
                        <li>Donor's Type:  <input className='info__field' name='type' type='text' value={props.type} /></li>
                        <li>Donor Blood Type:  <input className='info__field' name='bloodtype' type='text' value={props.bloodtype} /></li>
                        <li>Donor's Owner Name:  <input className='info__field' name='owner' type='text' value={props.owner} /></li>
                        <li>Contact Info:  <input className='info__field' name='contact' type='num' value={props.contact} /></li>
                        <li>Email Id:  <input className='info__field' name='email' type='email' value={props.email} /></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default DonorCard;