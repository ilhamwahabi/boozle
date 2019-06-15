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
  console.log(req.body.data);
  var newRoom = new Room();
  newRoom.team = "Kincir Angin";
  newRoom.name = req.body.data.name;
  newRoom.time = "08.00 - 10.00";
  newRoom.location = req.body.data.location;
  newRoom.date = "18 Juni 2019";
  newRoom.day = "Selasa";
  newRoom.img = "https://image.flaticon.com/icons/svg/1825/1825252.svg";
  newRoom.ownApproval = false;
  newRoom.oppApproval = false;
  newRoom.chat = [];

  newRoom.save(function(err) {
    if (err)
      res.status(400).send(err);
    console.log("room", newRoom);
    res.status(200).json({ message: 'Room created!', room: newRoom });
  });
};

exports.addNewChat = async function(req, res) {
  console.log(req.body);
  var room = await Room.findOne({
    _id: req.body.id,
  });
  room.chat.push({
    message: req.body.val,
    type: "you",
    time: new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3").replace(":", "."),
  })
  room.save(function(err) {
    res.status(200).json({ message: 'Room updated!', room: room });
  });
}
