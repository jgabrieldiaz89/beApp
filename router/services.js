const { Router } = require("express");
const {
    getService,
} = require("../controllers/servicesController");
const router = Router();

router.get(
  "/",
  getService
);

module.exports = router;