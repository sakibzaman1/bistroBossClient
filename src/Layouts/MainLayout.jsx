import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
      <div>
        {noHeaderFooter || <Navbar></Navbar>}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        {noHeaderFooter || <Footer></Footer>}
      </div>
    </div>
  );
};

export default MainLayout;
