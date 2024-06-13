import React from "react";
import { Outlet } from "react-router-dom"; // to displays the children in App
import Nav from "../Components/Nav";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
