import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePageError = () => {
  const error = useLoaderData();
  return <h2>{error.message}</h2>;
};

export default SinglePageError;
