import { useState } from "react";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./Pages";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  /**
   * <>
      <About />
      <Cocktail />
      <Error></Error>
      <HomeLayout></HomeLayout>
      <Landing></Landing>
      <Newsletter></Newsletter>
    </>
   */
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeLayout />}></Route>
        <Route path="/about" element={<Newsletter />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
