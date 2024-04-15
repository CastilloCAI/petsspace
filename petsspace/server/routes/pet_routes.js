const PetController = require("../controllers/pet_controller");
module.exports = function (app) {
  app.post("/api/pet", PetController.createPet);
  app.get("/api/pet", PetController.getAllPet);
  app.get("/api/pet/:id", PetController.getPet);
  app.put("/api/pet/:id", PetController.updatePet);
  app.delete("/api/pet/:id", PetController.deletePet);
};
