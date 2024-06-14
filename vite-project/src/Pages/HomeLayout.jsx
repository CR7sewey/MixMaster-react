import React from "react";
import { Outlet } from "react-router-dom"; // to displays the children in App
import Nav from "../Components/Nav";
import { useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation(); // returns state of the page
  const isPageLoading = navigation.state === "loading";
  const val = "some value"; // jsut testing - passes to all the compoents in Outlet
  return (
    <>
      <Nav />
      <section className="page">
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ val }} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
