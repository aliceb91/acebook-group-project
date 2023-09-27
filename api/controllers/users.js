const User = require("../models/user");
const TokenGenerator = require("../lib/token_generator");
const jwt = require('jsonwebtoken');


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
CreateFriend: async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const userToken = authHeader.split(' ')[1];
    const decodedPayload = jwt.decode(userToken);
    const userId = decodedPayload.user_id;
    const friendEmail = req.body.friendEmail;
    const user = await User.findById(userId).exec();
    const token = TokenGenerator.jsonwebtoken(req.user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found', token: token });
    }
    if (user.friends.includes(friendEmail)) {
      return res.status(400).json({ message: 'Friend already added' , token: token});
    }
    user.friends.push(friendEmail);
    await user.save();
    return res.status(201).json({ message: 'Friend added successfully!', token: token});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' , token: token});
  
}},
GetFriends: async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const userToken = authHeader.split(' ')[1];
    const decodedPayload = jwt.decode(userToken);
    const userId = decodedPayload.user_id;
    const token = TokenGenerator.jsonwebtoken(userId);

    const user = await User.findById(userId).exec();;
    
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
  }
}};
  


module.exports = UsersController;
