const express = require("express");
const router = express.Router();
const {
  getAllLoaiSan,
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
} = require("../controllers/LoaiSan.controller");

// const PATH = "/loai-san";

router.get(`/`, getAllLoaiSan);
router.get(`/:id`, getLoaiSanById);
router.post(`/create`, createLoaiSan);
router.put(`/update/:id`, updateLoaiSan);
router.put(`/delete/:id`, deleteLoaiSan);

module.exports = router;
