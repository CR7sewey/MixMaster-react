import { useState } from "react";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./Pages";
import Nav from "./Components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { loader as landingLoader } from "./Pages/Landing";
import { loader as singleCocktailLoader } from "./Pages/Cocktail";
import { action as newsletterFormAction } from "./Pages/Newsletter";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      }, // true to displays with HomeLayout page
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterFormAction,
      },
      { path: "about", element: <About /> }, /// relative to the parent
    ],
  },
]);

function App() {
  // return <RouterProvider router={router} />
  //https://reactrouter.com/en/main/route/route
  return <RouterProvider router={router} />;
  //<!--- <Route path="*" errorElement={<Error />}></Route> --->
}
/**
 * <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
          <Route
            index={true}
            element={<Landing />}
            loader={landingLoader}
          ></Route>
          <Route path="/cocktail" element={<Cocktail />}></Route>
          <Route path="/newsletter" element={<Newsletter />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </Router>
 */

export default App;
