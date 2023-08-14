import React from 'react';
import './Sidebar.css';
import { Box, ChevronDown, ChevronRight, GearFill, PeopleFill, PersonCircle, PersonFill, Speedometer } from 'react-bootstrap-icons';
import { Accordion } from 'react-bootstrap';
import CustomToggle from '../../CustomToggle/CustomToggle';
import { NavLink } from 'react-router-dom';
import logo from '../../sarvadhi-logo.png';

function Sidebar({ show }) {
  return (
    <div className={show ? 'sidebar p-2 hide vh-100 bg-primary' : 'sidebar vh-100 p-2 bg-primary'}>
      <div className='logo p-2'>
        <h2 className='text-center'>
          <NavLink to='/' className='text-white text-decoration-none'>
            <img src={logo} className={show ? ' logo logo-hide ' : 'logo logo-show  '} alt="Logo" />
          </NavLink>
        </h2>
      </div>
      <nav>
        <h6 className={show ? 'text-secondary hides' : 'text-secondary '}>
          Menu
        </h6>
        <ul className='list-unstyled'>
          <Accordion defaultActiveKey='0'>
            <li className='p-2'>
              <NavLink to='/' className='text-decoration-none d-flex align-items-center justify-content-center navlink'>
                <div className='icon col-1'>
                  <Speedometer />
                </div>
                <div className={show ? 'content col ms-2 hides' : 'content col ms-2 '}>
                  <span>
                    Dashboard
                  </span>
                </div>
                <div className={show ? 'arrow1 hides' : 'arrow1 '}>
                  <ChevronRight />
                </div>
              </NavLink>
            </li>
            <li className='p-2'>
              <CustomToggle eventkey='0'>
                <NavLink to='/user' className='text-decoration-none d-flex align-items-center justify-content-center navlink text-white position-relative'>
                  <div className='icon col-1'>
                    <PeopleFill />
                  </div>
                  <div className={show ? 'content col ms-2 hides' : 'content col ms-2'}>
                    <span>
                      Users
                    </span>
                  </div>
                  <div className={show ? 'arrow1 hides' : 'arrow1 '}>
                    <ChevronDown />
                  </div>
                </NavLink>
              </CustomToggle>
              <Accordion.Collapse eventkey='1'>
                <ul className='dropdownMenu list-unstyled p-3'>
                  <li className='p-2'>
                    <NavLink to='/admin' className='text-decoration-none d-flex align-items-center justify-content-center navlink'>
                      <div className='icon col-1'>
                        <PersonCircle />
                      </div>
                      <div className={show ? 'content col ms-2 hides' : 'content col ms-2 '}>
                        <span>
                          Admin
                        </span>
                      </div>
                    </NavLink>
                  </li>
                  <li className='p-2'>
                    <NavLink to='/user' className='text-decoration-none d-flex align-items-center justify-content-center navlink'>
                      <div className='icon col-1'>
                        <PersonFill />
                      </div>
                      <div className={show ? 'content col ms-2 hides' : 'content col ms-2'}>
                        <span>
                          User
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </li>
            <li className='p-2'>
              <NavLink to='/product' className='text-decoration-none d-flex align-items-center justify-content-center navlink'>
                <div className='icon col-1'>
                  <Box />
                </div>
                <div className={show ? 'content col ms-2 hides' : 'content col ms-2'}>
                  <span>
                    Product
                  </span>
                </div>
              </NavLink>
            </li>
            <li className='p-2'>
              <NavLink to='/setting' className='text-decoration-none d-flex align-items-center justify-content-center navlink'>
                <div className='icon col-1'>
                  <GearFill />
                </div>
                <div className={show ? 'content col ms-2 hides' : 'content col ms-2'}>
                  <span>
                    Setting
                  </span>
                </div>
              </NavLink>
            </li>
          </Accordion>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
