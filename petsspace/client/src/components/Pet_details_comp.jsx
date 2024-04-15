import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../stylesheet/details.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Pet_details_comp() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  function deletePet() {
    axios
      .delete(`http://localhost:8000/api/pet/${id}`)
      // .then((res) => console.log(res.data));
      .then(function (res) {
        setData(res.data);
        console.log(res);
        console.log("Adoptado!");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <div className="div-detail">
        <h2>Details about: {data.nombre}</h2>
        <button onClick={deletePet}>Adopt {data.nombre}</button>
      </div>

      <div className="limit__width">
        <div className="details__pet">
          <div>
            <h2>Pet type</h2>
            <p>{data.tipo}"</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>{data.descripcion}</p>
          </div>
          <div>
            <h2>Skills</h2>
            {data.skills?.map((skills, i) => {
              return <p key={i + 1}> {skills}</p>;
            })}
          </div>
          <div className="container__btn">
            <button>Like</button>
            <span>0 like(s)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
