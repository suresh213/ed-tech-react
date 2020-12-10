import React from 'react';
import newtonIcon from '../../icons/newton.png';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        <img className='' src={newtonIcon} alt='' />{' '}
        <p className='fs-30'>Newton School</p>
      </div>
      <div>
        <ul>
          <li>
            <p className='hide'>Complete</p>
          </li>
          <li>
            <p className='hide'>Launchpad</p>
          </li>
          <li>
            <p className='hide'>FAQ</p>
          </li>
          <li>
            <p className='hide'>Hire from Us</p>
          </li>
          <li>
            <button className='btn m'>Login</button>
          </li>
          <li>
            <button className='btn m'>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
