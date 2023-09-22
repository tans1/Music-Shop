const mongoose = require("mongoose");

const MusicModel = new mongoose.Schema({
  title: String,
  artist: String,
  fileName: String
});

const Music = mongoose.model("Music", MusicModel);
module.exports = Music;
