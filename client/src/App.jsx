import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Componets/User";
import CreateUser from "./Componets/CreateUser";
import UpdateUser from "./Componets/UpdateUser";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User></User>}></Route>
          <Route path="/create" element={<CreateUser></CreateUser>}></Route>
          <Route path="/update" element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
