const Music = require("../models/Music");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, "../uploads");
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({
  storage: storage
}).single("file");

// * CRUD OPERATION
const CreateMusic = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      res.send("Unable to upload file, " + err);
    } else {
      if (req.file == undefined) {
        res.send("Select a valid file");
      } else {
        const { title, artist } = req.body;
        try {
          const newMusic = new Music({
            title: title,
            artist: artist,
            fileName: req.file.filename
          });
          await newMusic.save();
          res.redirect("http://localhost:3000/");
        } catch (error) {
          res.status(500).send("Error saving data to the database");
        }
      }
    }
  });
};

const GetAllMusic = async (req, res, next) => {
  try {
    const musics = await Music.find().exec();
    return res.status(200).json({
      status: "success",
      value: musics
    });
  } catch (e) {
    const err = new Error("unable to fetch data");
    next(err);
  }
};

const DeleteMusic = async (req, res, next) => {
  try {
    const { Id } = req.query;
    const music = await Music.findById(Id).exec();
    if (music) {
      await Music.deleteOne({ _id: music._id }).catch((err) =>
        console.log("unable to delete", err)
      );
      fs.unlinkSync(`./uploads/${music.fileName}`);

      return res.status(200).json({
        status: "success",
        value: []
      });
    }
  } catch (e) {
    const err = new Error("unable to delete data");
    next(err);
  }
};

const UpdateMusic = async (req, res, next) => {
  try {
    const { Id } = req.query;
    const { title, artist } = req.body;
    if (!title || !artist) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields (title, artist, fileAddress)."
      });
    }

    Music.findOneAndUpdate({ _id: Id }, { title: title, artist: artist })
      .then(() => console.log("Music updated"))
      .catch((err) => console.log(err));
    return res.status(200).json({
      status: "success",
      value: updatedMusic
    });
  } catch (e) {
    const err = new Error("Unable to update music data.");
    next(err);
  }
};

const DownloadMusic = async (req, res, next) => {
  try {
    const { fileName } = req.query;
    const filePath = path.resolve(__dirname, "../uploads/" + fileName);

    res.download(filePath, `${fileName}.ogg`, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error sending file");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
};
module.exports = {
  CreateMusic,
  GetAllMusic,
  DeleteMusic,
  UpdateMusic,
  DownloadMusic
};
