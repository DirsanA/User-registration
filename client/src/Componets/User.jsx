import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:5000")
      .then(function (result) {
        setUsers(result.data);
      })
      .catch(function (err) {
        console.log("error on the featching data :" + err);
      });
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <Link
          to="/createUser"
          className="bg-success p-2 rounded text-light text-decoration-none"
        >
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link
                    to="/updateUser"
                    className="bg-success mx-1 p-1 px-2 rounded text-light text-decoration-none"
                  >
                    Edit
                  </Link>
                  <Link className="bg-danger mx-1 p-1 px-2 rounded text-light text-decoration-none">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
