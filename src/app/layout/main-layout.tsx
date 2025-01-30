import React from "react";
import Header from "../../widgets/header/header";
import Footer from "../../widgets/footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="pt-[4.75rem] flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
