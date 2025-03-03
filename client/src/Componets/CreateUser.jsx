import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  function Submit(e) {
    e.preventDefault();
    axios // liberary used to make http request such as sending data to the api endpoint
      .post("http://localhost:5000/createUser", { name, email, age })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="shadow-lg w-50 card">
        <div className="card-body">
          <h1 className="mb-4 text-center">Create User</h1>
          <form onSubmit={Submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={function (e) {
                  setName(e.target.value);
                }}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={function (e) {
                  setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={function (e) {
                  setAge(e.target.value);
                }}
                className="form-control"
                placeholder="Enter your age"
                required
              />
            </div>
            <button type="submit" className="w-100 btn btn-primary">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
