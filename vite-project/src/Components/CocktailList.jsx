import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";

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
        return <img src={values.image} key={values.id}></img>;
      })}
    </Wrapper>
  );
};

export default CocktailList;
