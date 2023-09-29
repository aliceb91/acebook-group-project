const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.patch("/", UsersController.FindAndUpdate);
router.get("/home", UsersController.Find);

module.exports = router;
