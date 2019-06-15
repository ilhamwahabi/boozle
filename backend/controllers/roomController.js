var Room = require('../models/room')

exports.getAllRooms = function(_, res) {
  Room.find(function(err, rooms) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json({ rooms: rooms });
  })
}

exports.addNewRoom = function(req, res) {
  console.log(req.body);
  var newRoom = new Room();
  newRoom.team = req.body.team;
  newRoom.name = req.body.name;
  newRoom.time = req.body.time;
  newRoom.location = req.body.location;
  newRoom.date = req.body.date;
  newRoom.day = req.body.day;
  newRoom.img = req.body.img;
  newRoom.save(function(err) {
    if (err)
      res.status(400).send(err);
    res.status(200).json({ message: 'Room created!' });
  });
};
