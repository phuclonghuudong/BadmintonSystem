const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllList = async () => {
  return await prisma.loaisan.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

const getAllListPagination = async ({
  page = 1,
  pageSize = 10,
  orderBy,
  where,
}) => {
  const skip = (parseInt(page) - 1) * parseInt(pageSize);
  const take = parseInt(pageSize);

  const [data, totalRecords] = await Promise.all([
    prisma.loaisan.findMany({
      skip,
      take,
      orderBy,
      where,
    }),
    prisma.loaisan.count({ where }),
  ]);

  const totalPages = Math.ceil(totalRecords / pageSize);

  return {
    data,
    pagination: {
      page,
      pageSize,
      totalRecords,
      totalPages,
    },
  };
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

const findUniqueTenLoaiSan = async (value) => {
  return await prisma.loaisan.findUnique({
    where: {
      tenLoaiSan: value,
    },
  });
};

const findByTenLoaiSan = async (value, id) => {
  return await prisma.loaisan.findFirst({
    where: {
      tenLoaiSan: value,
      NOT: {
        id: Number(id),
      },
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
  getAllListPagination,
  getAllListActive,
  findById,
  findUniqueTenLoaiSan,
  findByTenLoaiSan,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
};
