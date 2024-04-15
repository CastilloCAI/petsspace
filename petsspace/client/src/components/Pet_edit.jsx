import React, { useEffect, useState } from "react";
import "./../stylesheet/petForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Pet_edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:8000/api/pet/${id}`).then((res) => {
        reset({
          nombre: res.data.nombre,
          tipo: res.data.tipo,
          descripcion: res.data.descripcion,
          skills01: res.data.skills?.[0] || "",
          skills02: res.data.skills?.[1] || "",
          skills03: res.data.skills?.[2] || "",
        });
      });
    }

    getData();
  }, []);

  const updatePet = (e) => {
    e.skills = [e.skills01, e.skills02, e.skills03];
    delete e.skills01; //= undefined
    delete e.skills02; //= undefined
    delete e.skills03; //= undefined

    console.log(e);

    axios
      .put(`http://localhost:8000/api/pet/${id}`, e)
      .then((res) => console.log(res.data));
    navigate("/"); //use this  instead of history.push
  };

  return (
    <div className="m-auto p-5 container border rounded ">
      <div>
        <form onSubmit={handleSubmit(updatePet)}>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <label class="form-label"> Pest Name:</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("nombre", { required: true })}
                ></input>
                {errors.nombre?.type === "required" && (
                  <span>El nombre es nesesario</span>
                )}
              </div>
              <div>
                <label class="form-label"> Pet Type:</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("tipo", { required: true })}
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
                  Skills 1:
                  <input
                    className="form-control"
                    type="text"
                    {...register("skills01")}
                  />
                </div>
                <div>
                  Skills 2:
                  <input
                    className="form-control"
                    type="text"
                    {...register("skills02")}
                  />
                </div>
                <div>
                  Skills 3:
                  <input
                    className="form-control"
                    type="text"
                    {...register("skills03")}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Edit Pet</button>
        </form>
      </div>
    </div>
  );
}
