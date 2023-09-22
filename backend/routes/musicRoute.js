const express = require("express");
const router = express.Router();
const {
  CreateMusic,
  GetAllMusic,
  DeleteMusic,
  UpdateMusic,
  DownloadMusic
} = require("../controllers/musicController");

router.get("/all", GetAllMusic);
router.get("/download", DownloadMusic);
router.post("/create", CreateMusic);
router.put("/update", UpdateMusic);
router.delete("/delete", DeleteMusic);

module.exports = router;
