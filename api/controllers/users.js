const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }
    });
  },
  FindAndUpdate: async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email }).exec();
        if (!existingUser) {
            return res.status(404).json();
        }
        else {
          const user = await User.findOneAndUpdate({email: req.body.email}, {password: req.body.password}, {upsert: false}).exec()
          return res.status(200).json(user);
        }
        
    } catch (error) {
        res.status(400).json();
    }
}

};

module.exports = UsersController;
