import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";
const SearchForm = ({ drink }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  /*const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchedValue.value;
    if (!searchValue) return;
    console.log(searchedValue);
    setSearchedValue(searchValue);
    setDrink(searchValue);
    setSearchedValue("");
  };*/

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="text"
          name="searchedValue"
          className="form-input"
          defaultValue={drink}
        />
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching ..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
