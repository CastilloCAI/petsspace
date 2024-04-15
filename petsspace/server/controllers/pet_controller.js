const { Pet } = require("../models/pet_model");

//METODO CREAR
module.exports.createPet = async (request, response) => {
  try {
    const pet = await Pet.create(request.body);
    response.json(pet);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO LISTAR TODOS
module.exports.getAllPet = async (request, response) => {
  try {
    const pets = await Pet.find();
    response.json(pets);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO CAPTAR POR EL ID
module.exports.getPet = async (request, response) => {
  try {
    const pet = await Pet.findOne({ _id: request.params.id });
    response.json(pet);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO ACTUALIZAR
module.exports.updatePet = async (request, response) => {
  try {
    const pet = await Pet.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(pet);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO ELIMINAR
module.exports.deletePet = async (request, response) => {
  try {
    const pet = await Pet.deleteOne({ _id: request.params.id });
    response.json(pet);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
