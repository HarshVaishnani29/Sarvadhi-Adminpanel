import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import Admin from '../Admin/Admin';
import Product from '../Products/Product';
import EditProduct from '../EditProduct/EditProduct';
import './MainContent.css';
import User from '../Users/User';

function MainContent({ handleSidebar, handle, show }) {
  const navigate = useNavigate();

  const getLoginDetail = () => {
    let data = JSON.parse(sessionStorage.getItem('LoginData'));
    if (data === null) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }

  useEffect(() => {
    getLoginDetail();
  }, []);

  return (
    <div className={show ? 'col m ' : 'col m'}>
      <Header handleSidebar={handleSidebar} handle={handle} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user' element={<User/>} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/product' element={<Product />} />
        <Route path='/updateproduct' element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default MainContent;
