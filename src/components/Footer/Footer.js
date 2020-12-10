import React from 'react';

const Footer = () => {
  return (
    <div className='footer row bg-dark'>
      <div className='col-2 '>
        <h1>Newton School</h1>
        <p>
          Newton School is a platform to learn and develop skills that you need
          for your best Tech career. We boost up your skills and prepare you for
          your dream job. ​ We are dedicated to build and structure your tech
          career for the dream companies worldwide based on your skills,
          eligibility, preferences and work hard with you till you get into one
          of yours.
        </p>
        <div className='my-3'>
          <i className='fa fa-facebook'></i>
          <span>
            <i className='fa fa-instagram'></i>
          </span>
          <span>
            <i className='fa fa-linkedin'></i>
          </span>
          <span>
            <i className='fa fa-twitter'></i>
          </span>
          <span>
            <i className='fa fa-youtube'></i>
          </span>
        </div>
      </div>
      <div className='col-2'>
        <h3>About</h3>
        <br />
        <h3>Income Share Agreement</h3>
        <br />
        <h3>Contact Us</h3>
        <br />
        <h3>Career</h3>
      </div>
      <div>
        <h4 className='align'>
          © 2019 Incanus Technologies Pvt Ltd | All rights reserved.
        </h4>
      </div>
    </div>
  );
};
export default Footer;
