import React from "react";
import SearchForm from "../Components/SearchForm";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const fetchSearchedTerm = (searchTerm) => {
  return {
    // check what is returning
    queryKey: ["images", searchTerm || "all"], // important bcs images string value doesnt change, so, only refetch/rerenders when search term changes
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      return data;
    }, // needs to return a promise
    onError: (error) => {
      console.log(error);
    },
  };
};

export const loader = async () => {
  const searchTerm = "";
  return { searchTerm };
};

const Landing = () => {
  const data2 = useLoaderData();
  console.log(data2);
  const [drink, setDrink] = useState("");

  const { data, error, isLoading, isError } = useQuery(
    fetchSearchedTerm(drink)
  );
  console.log(data);

  if (isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section>
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.length < 1) {
    return (
      <section>
        <h4>No Results found...</h4>
      </section>
    );
  }
  console.log(data?.drinks[0].strDrinkThumb);
  return (
    <div>
      <SearchForm drink={drink} setDrink={setDrink} />
      <div>
        {data?.drinks.map((values) => {
          const { idDrink, strDrinkThumb } = values;
          return (
            <>
              <img src={strDrinkThumb} key={idDrink}></img>;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
