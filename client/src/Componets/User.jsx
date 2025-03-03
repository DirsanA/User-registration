import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users from the server
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  };

  // Function to delete a user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:5000/deleteUser/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user._id !== id)); // Update state after deletion
        })
        .catch((err) => {
          console.log("Error deleting user:", err);
        });
    }
  };

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
                    className="bg-success mx-1 p-1 rounded text-light text-decoration-none"
                    to={`/updateUser/${user._id}`}
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-danger mx-1 p-1 px-2 border-0 rounded text-light"
                  >
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
