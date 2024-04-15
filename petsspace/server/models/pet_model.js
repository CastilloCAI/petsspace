const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
  nombre: {
    type: String,
    minlength: [3, "El minimo es de 3"],
    required: [true, "Este dato es requerido"],
  },
  tipo: {
    type: String,
    minlength: [3, "El minimo es de 3"],
    required: [true, "Este dato es requerido"],
  },
  descripcion: {
    type: String,
    minlength: [3, "El minimo es de 3"],
    maxlength: [200, "El máximo es de 500 caracteres"],
  },
  skills: [String]
});

module.exports.Pet = mongoose.model("Pet", PetSchema);
