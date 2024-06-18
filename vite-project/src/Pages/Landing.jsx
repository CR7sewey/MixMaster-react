import React from "react";
import SearchForm from "../Components/SearchForm";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../Components/CocktailList";

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

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url); // we get the value from the URL from the submittted fomr (the name in the url when submitting the form)

    const searchTerm = url.searchParams.get("searchedValue") || "";
    await queryClient.ensureQueryData(fetchSearchedTerm(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  //const [drink, setDrink] = useState("");
  console.log(searchTerm, "ahahahha");
  const { data, error, isLoading, isError } = useQuery(
    fetchSearchedTerm(searchTerm)
  );
  console.log(data, "oioio");

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

  //console.log(data?.drinks[0].strDrinkThumb, "aaaa", data.drinks);
  console.log(data, "aqui 123");
  return (
    <div>
      <SearchForm drink={searchTerm} />
      <CocktailList data={data} />
    </div>
  );
};

export default Landing;
