const express = require("express");
const router = express.Router();

const SteamController = require("../controllers/steam");

router.get("/", SteamController.FindNews);

module.exports = router;