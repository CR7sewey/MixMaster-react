import axios from "axios";
import React from "react";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  // action do form
  console.log("IN action");
  const data = await request.formData(); // get the data
  console.log(data, "rata");
  //const formData = new FormData(data);
  const entries = [...data.values()]; //.entries
  if (entries.includes("")) {
    return toast.error("You need to provide all the info");
  }
  const formObject = Object.fromEntries(data);

  try {
    const response = await axios.post(newsletterUrl, formObject);
    toast.success(`You will receive our newsletter, ${formObject.name}`);
    return redirect("/");
  } catch (e) {
    toast.error(e?.response?.data?.msg);
    return e;
  }
};

const Newsletter = () => {
  // could be <form className="form" method="POST" action=>
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          defaultValue="Mike"
        />
        <label
          htmlFor="lastName"
          className="form-label"
          style={{ marginTop: "0.5rem" }}
        >
          last name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-input"
          id="lastName"
          defaultValue="Carvalho"
        />
        <label
          htmlFor="email"
          className="form-label"
          style={{ marginTop: "0.5rem" }}
        >
          email
        </label>
        <input
          type="email"
          name="email"
          className="form-input"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Submit
      </button>
    </Form>
  );
};

export default Newsletter;
