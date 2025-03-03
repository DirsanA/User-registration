import React, { useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [users, setUsers] = useState([
    {
      name: "Dirsan",
      email: "dirsanantehun739@gmail.com",
      age: "22",
    },
    {
      name: "Samuel",
      email: "samuelantehun@gmail.com",
      age: "16",
    },
  ]);

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
                  <button className="bg-success rounded text-light">
                    Edit
                  </button>{" "}
                  <button className="bg-danger border-none rounded text-light">
                    Delete
                  </button>
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
