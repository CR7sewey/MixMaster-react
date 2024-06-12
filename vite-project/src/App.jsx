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
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/",
    element: <About />,
  },
]);

function App() {
  // return <RouterProvider router={router} />
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
