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
    children: [
      { index: true, element: <Landing /> }, // true to displays with HomeLayout page
      { path: "cocktail", element: <Cocktail /> },
      { path: "newletter", element: <Newsletter /> },
      { path: "about", element: <About /> }, /// relative to the parent
    ],
  },
]);

function App() {
  // return <RouterProvider router={router} />
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Landing />}></Route>
          <Route path="/cocktail" element={<Cocktail />}></Route>
          <Route path="/newsletter" element={<Newsletter />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
