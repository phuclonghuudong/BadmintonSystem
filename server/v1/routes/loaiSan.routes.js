const express = require("express");
const router = express.Router();
const {
  getAllLoaiSan,
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
  getAllLoaiSanPagination,
} = require("../controllers/loaiSan.controller");

// const PATH = "/loai-san";

router.get(`/`, getAllLoaiSan);

// GET /pagination?page=1&pageSize=10&sortBy=id&sortOrder=asc&keyword=sân
router.get(`/pagination`, getAllLoaiSanPagination);
router.get(`/:id`, getLoaiSanById);
router.post(`/create`, createLoaiSan);
router.put(`/update/:id`, updateLoaiSan);
router.put(`/delete/:id`, deleteLoaiSan);

module.exports = router;
