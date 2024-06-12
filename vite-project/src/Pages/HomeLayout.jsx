import React from "react";
import { Outlet } from "react-router-dom"; // to displays the children in App

const HomeLayout = () => {
  return (
    <div>
      HomeLayout
      <Outlet />
    </div>
  );
};

export default HomeLayout;
