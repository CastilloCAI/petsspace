import React, { useEffect, useState } from "react";
import "./../stylesheet/petForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function Pet_form() {
  const messages = {
    nombre: "el minimo requerido es de 3 caracteres",
  };
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [skills01, setSkills01] = useState("");
  const [skills02, setSkills02] = useState("");
  const [skills03, setSkills03] = useState("");

  const createPet = (e) => {
    e.skills = [skills01, skills02, skills03];
    console.log(e);
    axios
      .post(`http://localhost:8000/api/pet`, e)
      // .then((res) => console.log(res.data));
      .then(function (res) {
        console.log(res);
        console.log("Agregado correctamente");
        navigate("/"); //use this  instead of history.push
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="m-auto p-5 container border rounded ">
      <div>
        <form onSubmit={handleSubmit(createPet)}>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <label class="form-label"> Pest Name:</label>
                <input
                  className="form-control"
                  type="text"
                  minLength={"3"}
                  {...register("nombre", {
                    required: true,
                  })}
                ></input>
                {errors.nombre?.type === "required" && (
                  <span>El nombre es nesesario </span>
                )}
              </div>
              <div>
                <label class="form-label"> Pet Type:</label>

                <input
                  className="form-control"
                  type="text"
                  minLength={"3"}
                  {...register("tipo", {
                    required: true,
                  })}
                ></input>
                {errors.tipo?.type === "required" && (
                  <span>El tipo es nesesario</span>
                )}
              </div>
              <div>
                <label className="form-label">Pet Description:</label>
                <input
                  className="form-control"
                  type="text"
                  minLength={"3"}
                  {...register("descripcion", { required: true })}
                ></input>
                {errors.descripcion?.type === "required" && (
                  <span>La descripcion es nesesario</span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="div-skills">
                <h4>Skills (optional):</h4>
                <div>
                  <label class="form-label"> Skills 1:</label>

                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setSkills01(e.target.value)}
                  />
                </div>
                <div>
                  <label class="form-label"> Skills 2:</label>

                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setSkills02(e.target.value)}
                  />
                </div>
                <div>
                  <label class="form-label"> Skills 3:</label>

                  <input
                    className="form-control"
                    type="text"
                    onChange={(i) => setSkills03(i.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Add Pet</button>
        </form>
      </div>
    </div>
  );
}
