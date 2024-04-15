import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(`http://localhost:8000/api/pet/`);
      setPets(respuesta.data);
    };

    getData();
  }, []);

  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index}>
              <td>{pet.nombre}</td>
              <td>{pet.tipo}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/pets/details/${pet._id}`}
                >
                  Details
                </Link>
                |
                <Link
                  className="btn btn-secondary"
                  to={`/pets/${pet._id}/edit`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Pets;
