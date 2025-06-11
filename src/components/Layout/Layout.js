import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';



import axios from 'axios';

import Header from '../Header/Header';

import ScroolingHead from '../Header/ScroolingHead';
import Footer from '../../features/Footer/Footer';
import { useAuthContext } from '../../features/auth/context/AuthContext';
function Layout() {
  const { login, setLogin, role, setRole, setUserData } = useAuthContext();
  useEffect(() => {
    console.log("inside layout")
    if (!!localStorage.getItem('ProfileData')) {
      setLogin(true)
    }
  }, [login])
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    console.log("storeRole", storedRole)
    if (storedRole === 'seller') {

      setRole(1);
    } else {
      setRole(0);
    }
  }, []);
  return (
    <div>
      <ScroolingHead />
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
}

export default Layout;
