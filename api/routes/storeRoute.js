const express = require("express");
const router = express.Router();

const StoreSteamController = require("../controllers/storeSteam");

router.get("/", StoreSteamController.FindGames);

module.exports = router;