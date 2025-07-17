const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllList = async () => {
  return await prisma.loaisan.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

const getAllListActive = async () => {
  return await prisma.loaisan.findMany({
    where: {
      trangThai: {
        not: -1,
      },
    },
    orderBy: {
      id: "asc",
    },
  });
};

const findById = async (id) => {
  return await prisma.loaisan.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createLoaiSan = async (data) => {
  return await prisma.loaisan.create({
    data: {
      tenLoaiSan: data.tenLoaiSan,
      moTa: data.moTa,
      trangThai: data.trangThai ?? 1,
    },
  });
};

const updateLoaiSan = async (id, data) => {
  return await prisma.loaisan.update({
    where: {
      id: Number(id),
    },
    data: {
      tenLoaiSan: data.tenLoaiSan,
      moTa: data.moTa,
      trangThai: data.trangThai ?? 1,
    },
  });
};

const deleteLoaiSan = async (id) => {
  return await prisma.loaisan.update({
    where: {
      id: Number(id),
    },
    data: {
      trangThai: -1,
    },
  });
};

const deleteHardLoaiSan = async (id) => {
  return await prisma.loaisan.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllList,
  getAllListActive,
  findById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
};
