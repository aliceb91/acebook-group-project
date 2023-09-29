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
/*Find: async (req, res) => {
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
},*/
  CreateFriend: async (req, res) => {
    /*try {
      const authHeader = req.headers.authorization;
      const userToken = authHeader.split(' ')[1];
      const decodedPayload = jwt.decode(userToken);
      const userId = decodedPayload.user_id;
      const friendEmail = req.body.friendEmail;
      const user = await User.findById(userId).exec();
      const token = TokenGenerator.jsonwebtoken(req.user_id);

      if (!user) {
        return res.status(404).json({ message: 'User not found'});
      }
      if (user.friends.includes(friendEmail)) {
        return res.status(400).json({ message: 'Friend already added'});
      }
      user.friends.push(friendEmail);
      await user.save();
      return res.status(201).json({ message: 'Friend added successfully!', token: token});

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error'});

    }*/
    const targetUser = await User.findOne({email: req.body.friendEmail}).exec();
    const currentUser = await User.findOne({username: req.query.currentUser}).exec();
    if (targetUser === null) {
      return res.status(404).json({ message: 'User not found' });
    } else {await User.findOneAndUpdate({username: req.query.currentUser}, { $push: {friends: `${targetUser.firstName} ${targetUser.lastName}`}}).exec();
    }
    const token = await TokenGenerator.jsonwebtoken(req.user_id)
    res.status(200).json({token: token, message: "Friend added!"})

  },
  FindCurrentUser: async (req, res) => {
    try {
      console.log(req.query.email)
      const currentUser = await User.findOne({ email: req.query.email }).exec();
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      if (!currentUser) {
        return res.status(404).json();
      } else {
        return res.status(200).json({token: token, user: currentUser});
      }
    } catch (error) {
      console.error(error)
      res.status(400).json();
    }
  },
  GetFriends: async (req, res) => {
    /*try {
      const authHeader = req.headers.authorization;
      const userToken = authHeader.split(' ')[1];
      const decodedPayload = jwt.decode(userToken);
      const userId = decodedPayload.user_id;
      const token = TokenGenerator.jsonwebtoken(userId);

      const user = await User.findById(userId).exec();;
      console.log(user)
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const friendNameListPromises = user.friends.map(async friendemail => {
        const friend = await User.findOne({ email: friendemail }).exec();
        return friend.firstName + " " + friend.lastName;
      })

      const friendNameList = await Promise.all(friendNameListPromises);
      
      res.status(200).json({ friends: friendNameList, token: token });
    } catch (error) {
      console.error('Error fetching friends:', error);
      res.status(500).json({ message: 'Internal server error' });
    }*/
    const currentUser = await User.findOne({username: req.query.currentUser}).exec();
    const token = await TokenGenerator.jsonwebtoken(req.user_id)
    res.status(200).json({token: token, friends: currentUser.friends})
  }};

module.exports = UsersController;