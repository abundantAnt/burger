const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// set up routes and prefix them
router.use("/burgers", apiRoutes);


module.exports = router;
