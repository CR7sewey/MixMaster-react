import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SearchForm";
const SearchForm = ({ drink, setDrink }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchedValue.value;
    if (!searchValue) return;
    console.log(searchedValue);
    setSearchedValue(searchValue);
    setDrink(searchValue);
    setSearchedValue("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="searchedValue" className="form-input" />
        <button className="btn">Search</button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
