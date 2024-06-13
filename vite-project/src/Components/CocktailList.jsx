import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailItem from "./CocktailItem";

const CocktailList = ({ data }) => {
  if (!data) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  console.log(data);
  const formattedDrinks = data.drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((values) => {
        return <CocktailItem {...values} key={values.id} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
