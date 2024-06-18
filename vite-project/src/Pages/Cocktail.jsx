import React, { useEffect } from "react";
import { useLoaderData, Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchSingleCocktail = (searchTermID) => {
  return {
    // check what is returning
    queryKey: ["cocktail", searchTermID], // important bcs images string value doesnt change, so, only refetch/rerenders when search term changes
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${searchTermID}`);
      console.log(data, "asoidsadoia");
      return data;
    }, // needs to return a promise
    onError: (error) => {
      console.log(error);
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    console.log(id, "ID");
    const data = await queryClient.ensureQueryData(fetchSingleCocktail(id));
    return { id, data };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data, error, isLoading, isError } = useQuery(fetchSingleCocktail(id));
  //console.log(data, "uma data");

  const navigate = useNavigate();
  //console.log(data, "ZE maria");
  if (!data) return <Navigate to="/" />;
  /*useEffect(() => {
    if (!data) {
      navigate("/");

      console.log("AQUIIUIUIU");
    }
    console.log("AQUI 123");
  }, [id]);*/

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = data.drinks[0];

  const validIngredients = Object.keys(data.drinks[0]) // get keys
    .filter((vals) => {
      return vals.includes("strIngredient") && data.drinks[0][vals] !== null;
    })
    .map((strIngred) => data.drinks[0][strIngred]);
  console.log(Array.from(data.drinks[0]), Object.entries(data.drinks[0]));

  return (
    <Wrapper>
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
