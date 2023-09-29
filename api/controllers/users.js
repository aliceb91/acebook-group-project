const User = require("../models/user");
const jwt = require('jsonwebtoken');
const TokenGenerator = require("../lib/token_generator");

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
  },

Find: async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const current_user = await User.findById(decoded.user_id).exec();

    if (!current_user) {
      return res.status(404).json({ message: 'User not found' });
    } else {
    
      const updatedToken = TokenGenerator.jsonwebtoken(current_user._id);
      
      console.log(current_user);
      console.log(updatedToken);

      return res.status(200).json({ user: current_user, token: updatedToken });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid token or user not found' });
  }
},

};

module.exports = UsersController;
