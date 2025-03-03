import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdateUser = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="shadow-lg w-50 card">
        <div className="card-body">
          <h1 className="mb-4 text-center">Update User</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
                className="form-control"
                placeholder="Enter your age"
                required
              />
            </div>
            <button type="submit" className="w-100 btn btn-primary">
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
