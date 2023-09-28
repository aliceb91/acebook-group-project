const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: String,
  firstName: String,
  lastName: String,
  signUpTimeAndDate: { type: String, required: true },
  friends:[{type: String}],
  createdAt: { type: String, required: true },
  profilePic: { type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
