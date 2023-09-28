const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.patch("/", UsersController.FindAndUpdate);
router.post("/addfriend", UsersController.CreateFriend);
router.get("/friends", UsersController.GetFriends);
router.get('/', UsersController.FindCurrentUser);

module.exports = router;
