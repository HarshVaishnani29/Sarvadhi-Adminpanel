import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import { Provider } from 'react-redux';
import store from './Store';
import Loader from './Component/Loader/Loader'; // Import the Loader component

const loadingDelay = 2000; // Adjust the delay to your preference

const RootApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {loading ? (
          <Loader /> // Show loader while loading
        ) : (
          <Routes>
            <Route path='*' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        )}
      </BrowserRouter>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);
