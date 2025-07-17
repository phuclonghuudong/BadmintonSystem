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

  tenLoaiSan = tenLoaiSan?.trim();
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
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
};
