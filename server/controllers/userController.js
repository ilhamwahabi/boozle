var User = require('../models/user')

exports.getUserDetail = async function(req, res) {
  var user = await User.findOne({
    _id: req.params.id
  });
  if(!user) {
    res.status(400).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: user });
  }
};
