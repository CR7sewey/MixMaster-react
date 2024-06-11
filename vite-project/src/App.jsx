import { useState } from "react";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./Pages/index";
import "./App.css";

function App() {
  return (
    <>
      <About />
      <Cocktail />
      <Error></Error>
      <HomeLayout></HomeLayout>
      <Landing></Landing>
      <Newsletter></Newsletter>
    </>
  );
}

export default App;
