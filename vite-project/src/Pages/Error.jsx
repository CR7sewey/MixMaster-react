import React from "react";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
console.log("aqiui 2");
const Error = () => {
  console.log("aqiui");
  const error = useRouteError();
  console.log(error, "aaaaaaaaaaaaaaa");
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! </h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <p>Something went wrong :(</p>
      </div>
    </Wrapper>
  );
};

export default Error;
