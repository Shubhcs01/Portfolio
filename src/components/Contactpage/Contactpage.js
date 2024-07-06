import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a Software Engineer role. <br /> If there is any open position, my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll back to you ASAP!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.location.href = "mailto:shubhcs01@gmail.com";
          }}
        >Say Hello!</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2024.
        <br /> 
        Designed & Built by <span>Shubham Gupta</span></p>
      </Container>
    </div>
  )
}

export default Contactpage