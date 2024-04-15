import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../stylesheet/header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <div className="container p-auto m-auto">
      <div className="row">
        <h1 className="col">Pet Shelter</h1>
        <div className="col text-end align-self-center">
          {location == "/" ? (
            <button
              type="button"
              className="btn btn-link"
              onClick={() => navigate("/pets/new")}
            >
              add a pet to the shelter
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-link"
              onClick={() => navigate("/")}
            >
              back To Home
            </button>
          )}
          {location == "/" ? (
            <h2 className="col">These pets are looking for a good home</h2>
          ) : location === "/pets/new" ? (
            <h2>Know a pet needing home</h2>
          ) : location === "/pets/details" ? (
            ""
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
