const LoaiSanService = require("../services/loaiSan.service");
const { responseHandler } = require("../utils/responseHandler");

const getAllLoaiSan = async (req, res, next) => {
  try {
    const result = await LoaiSanService.getAllList();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ LOẠI SÂN", result);
  } catch (error) {
    next(error);
  }
};

const getAllLoaiSanPagination = async (req, res, next) => {
  try {
    const {
      page = 1,
      pageSize = 10,
      sortBy = "id",
      sortOrder = "desc",
      keyword = "",
    } = req.query || {};

    const pageNumber = parseInt(page) || 1;
    const pageSizeNumber = parseInt(pageSize) || 10;

    const result = await LoaiSanService.getAllListPagination({
      page: pageNumber,
      pageSize: pageSizeNumber,
      orderBy: {
        [sortBy]: sortOrder.toLowerCase() === "asc" ? "asc" : "desc",
      },
      where: keyword
        ? {
            tenLoaiSan: {
              contains: keyword.toLowerCase(),
            },
          }
        : {},
    });

    if (!result || result.data.length === 0) {
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);
    }

    return responseHandler(res, 200, "DANH SÁCH LOẠI SÂN (PHÂN TRANG)", result);
  } catch (error) {
    console.error("❌ Lỗi getAllLoaiSanPagination:", error);
    next(error);
  }
};

const getLoaiSanById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await LoaiSanService.findById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "CHI TIẾT LOẠI SÂN", result);
  } catch (error) {
    next(error);
  }
};

const createLoaiSan = async (req, res, next) => {
  let { tenLoaiSan, trangThai, moTa } = req.body;

  tenLoaiSan = tenLoaiSan?.trim();
  try {
    if (!tenLoaiSan) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const existName = await LoaiSanService.findUniqueTenLoaiSan(tenLoaiSan);
    if (existName) {
      return responseHandler(res, 409, "LOẠI SÂN ĐÃ TỒN TẠI!", null, true);
    }

    const result = await LoaiSanService.createLoaiSan({
      tenLoaiSan,
      trangThai,
      moTa,
    });

    responseHandler(res, 200, "THÊM MỚI LOẠI SÂN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const updateLoaiSan = async (req, res, next) => {
  let { tenLoaiSan, trangThai, moTa } = req.body;
  const { id } = req.params;

  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    if (!tenLoaiSan)
      return responseHandler(
        res,
        400,
        "VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN",
        null,
        true
      );

    const findById = await LoaiSanService.findById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const checkUniqueName = await LoaiSanService.findByTenLoaiSan(
      tenLoaiSan,
      id
    );
    if (checkUniqueName)
      return responseHandler(res, 409, "LOẠI SÂN ĐÃ TỒN TẠI!", null, true);

    const result = await LoaiSanService.updateLoaiSan(id, {
      tenLoaiSan,
      trangThai,
      moTa,
    });
    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

const deleteLoaiSan = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const findById = await LoaiSanService.findById(id);
    if (!findById)
      return responseHandler(res, 403, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await LoaiSanService.deleteLoaiSan(id);
    responseHandler(res, 200, "XÓA THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLoaiSan,
  getAllLoaiSanPagination,
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
};
