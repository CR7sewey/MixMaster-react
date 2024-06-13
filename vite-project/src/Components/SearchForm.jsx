import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="searchedValue" />
        <button className="btn">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
