const express = require("express");
const router = express.Router();
const LoaiSan = require("./loaiSan.routes");

const BASE_PATH = "/api/v1";

router.use(`${BASE_PATH}/loai-san`, LoaiSan);

module.exports = router;
