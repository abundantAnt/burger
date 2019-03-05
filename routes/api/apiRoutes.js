const router = require("express").Router();
const burgersController = require("../../controllers/burgers_controller");

// define API routes

// when user hits /api/burgers
router
  .route("/")
  .get(burgersController.findAll)
  .post(burgersController.createBurger);


// when user hits /api/burgers/:id
router
  .route("/:id")
  .get(burgersController.findById)
  .put(burgersController.updateBurger)
  .delete(burgersController.deleteBurger);

module.exports = router;
