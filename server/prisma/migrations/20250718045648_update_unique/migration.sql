/*
  Warnings:

  - A unique constraint covering the columns `[tenLoaiSan]` on the table `loaisan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tenLoaiSanPham]` on the table `loaisanpham` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tenSan]` on the table `san` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tenSanPham]` on the table `sanpham` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `loaisan_tenLoaiSan_key` ON `loaisan`(`tenLoaiSan`);

-- CreateIndex
CREATE UNIQUE INDEX `loaisanpham_tenLoaiSanPham_key` ON `loaisanpham`(`tenLoaiSanPham`);

-- CreateIndex
CREATE UNIQUE INDEX `san_tenSan_key` ON `san`(`tenSan`);

-- CreateIndex
CREATE UNIQUE INDEX `sanpham_tenSanPham_key` ON `sanpham`(`tenSanPham`);
