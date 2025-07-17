-- CreateTable
CREATE TABLE `chitietdatsan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datSanId` INTEGER NOT NULL,
    `sanPhamId` INTEGER NOT NULL,
    `giaBan` FLOAT NOT NULL,
    `soLuong` SMALLINT NOT NULL,
    `ghiChu` VARCHAR(255) NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `chitietdatsan_datSanId_idx`(`datSanId`),
    INDEX `chitietdatsan_sanPhamId_idx`(`sanPhamId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chitietquyen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chucNangId` INTEGER NOT NULL,
    `nhomQuyenId` INTEGER NOT NULL,
    `hanhDong` VARCHAR(50) NOT NULL,
    `moTa` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `chitietquyen_chucNangId_idx`(`chucNangId`),
    INDEX `chitietquyen_nhomQuyenId_idx`(`nhomQuyenId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `danhmucchucnang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maChucNang` VARCHAR(20) NOT NULL,
    `tenChucNang` VARCHAR(50) NOT NULL,
    `moTa` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `danhmucchucnang_maChucNang_key`(`maChucNang`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datsan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maDatSan` VARCHAR(20) NOT NULL,
    `sanId` INTEGER NOT NULL,
    `khachHangId` INTEGER NOT NULL,
    `nhanVienId` INTEGER NOT NULL,
    `ngayDat` DATETIME(3) NOT NULL,
    `checkIn` DATETIME(3) NOT NULL,
    `checkOut` DATETIME(3) NOT NULL,
    `giaSan` FLOAT NOT NULL,
    `tongTien` FLOAT NULL,
    `thanhToan` VARCHAR(50) NULL,
    `ghiChu` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `datsan_khachHangId_idx`(`khachHangId`),
    INDEX `datsan_nhanVienId_idx`(`nhanVienId`),
    INDEX `datsan_sanId_idx`(`sanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `giathue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sanId` INTEGER NOT NULL,
    `khungGioId` INTEGER NOT NULL,
    `thuTrongTuan` VARCHAR(10) NULL,
    `giaTien` FLOAT NOT NULL,
    `moTa` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `giathue_khungGioId_idx`(`khungGioId`),
    INDEX `giathue_sanId_idx`(`sanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `khachhang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hoTen` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NULL,
    `cccd` VARCHAR(20) NULL,
    `soDienThoai` VARCHAR(15) NOT NULL,
    `gioiTinh` TINYINT NULL,
    `diaChi` TEXT NULL,
    `ngaySinh` DATE NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `khachhang_email_key`(`email`),
    UNIQUE INDEX `khachhang_cccd_key`(`cccd`),
    UNIQUE INDEX `khachhang_soDienThoai_key`(`soDienThoai`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `khunggio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gioBatDau` VARCHAR(10) NOT NULL,
    `gioKetThuc` VARCHAR(10) NOT NULL,
    `moTa` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loaisan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenLoaiSan` VARCHAR(50) NOT NULL,
    `moTa` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loaisanpham` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenLoaiSanPham` VARCHAR(100) NOT NULL,
    `moTa` TEXT NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nhanvien` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hoTen` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `cccd` VARCHAR(20) NULL,
    `soDienThoai` VARCHAR(20) NOT NULL,
    `gioiTinh` TINYINT NULL,
    `diaChi` VARCHAR(255) NULL,
    `ngaySinh` DATETIME(3) NULL,
    `hinhAnh` VARCHAR(255) NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `nhanvien_email_key`(`email`),
    UNIQUE INDEX `nhanvien_cccd_key`(`cccd`),
    UNIQUE INDEX `nhanvien_soDienThoai_key`(`soDienThoai`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nhomquyen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maQuyen` VARCHAR(50) NOT NULL,
    `tenQuyen` VARCHAR(100) NOT NULL,
    `moTa` VARCHAR(255) NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `nhomquyen_maQuyen_key`(`maQuyen`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `san` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `loaiSanId` INTEGER NOT NULL,
    `tenSan` VARCHAR(50) NOT NULL,
    `giaSan` FLOAT NOT NULL,
    `moTa` TEXT NULL,
    `hinhAnh` VARCHAR(255) NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `san_loaiSanId_idx`(`loaiSanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sanpham` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `loaiSanPhamId` INTEGER NOT NULL,
    `tenSanPham` VARCHAR(100) NOT NULL,
    `giaSanPham` DOUBLE NOT NULL,
    `soLuong` INTEGER NOT NULL,
    `donViTinh` VARCHAR(20) NOT NULL,
    `moTa` VARCHAR(255) NULL,
    `hinhAnh` VARCHAR(255) NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `sanpham_loaiSanPhamId_idx`(`loaiSanPhamId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taikhoan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nhanVienId` INTEGER NOT NULL,
    `nhomQuyenId` INTEGER NOT NULL,
    `tenDangNhap` VARCHAR(50) NOT NULL,
    `matKhau` VARCHAR(255) NOT NULL,
    `emailDaXacThuc` BOOLEAN NULL,
    `otpQuenMatKhau` VARCHAR(10) NULL,
    `otpHetHanLuc` DATETIME(3) NULL,
    `refreshToken` VARCHAR(255) NULL,
    `trangThai` TINYINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `taikhoan_tenDangNhap_key`(`tenDangNhap`),
    INDEX `taikhoan_nhanVienId_idx`(`nhanVienId`),
    INDEX `taikhoan_nhomQuyenId_idx`(`nhomQuyenId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chitietdatsan` ADD CONSTRAINT `chitietdatsan_datSanId_fkey` FOREIGN KEY (`datSanId`) REFERENCES `datsan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chitietdatsan` ADD CONSTRAINT `chitietdatsan_sanPhamId_fkey` FOREIGN KEY (`sanPhamId`) REFERENCES `sanpham`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chitietquyen` ADD CONSTRAINT `chitietquyen_chucNangId_fkey` FOREIGN KEY (`chucNangId`) REFERENCES `danhmucchucnang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chitietquyen` ADD CONSTRAINT `chitietquyen_nhomQuyenId_fkey` FOREIGN KEY (`nhomQuyenId`) REFERENCES `nhomquyen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datsan` ADD CONSTRAINT `datsan_khachHangId_fkey` FOREIGN KEY (`khachHangId`) REFERENCES `khachhang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datsan` ADD CONSTRAINT `datsan_nhanVienId_fkey` FOREIGN KEY (`nhanVienId`) REFERENCES `nhanvien`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datsan` ADD CONSTRAINT `datsan_sanId_fkey` FOREIGN KEY (`sanId`) REFERENCES `san`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `giathue` ADD CONSTRAINT `giathue_khungGioId_fkey` FOREIGN KEY (`khungGioId`) REFERENCES `khunggio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `giathue` ADD CONSTRAINT `giathue_sanId_fkey` FOREIGN KEY (`sanId`) REFERENCES `san`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `san` ADD CONSTRAINT `san_loaiSanId_fkey` FOREIGN KEY (`loaiSanId`) REFERENCES `loaisan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sanpham` ADD CONSTRAINT `sanpham_loaiSanPhamId_fkey` FOREIGN KEY (`loaiSanPhamId`) REFERENCES `loaisanpham`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taikhoan` ADD CONSTRAINT `taikhoan_nhanVienId_fkey` FOREIGN KEY (`nhanVienId`) REFERENCES `nhanvien`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taikhoan` ADD CONSTRAINT `taikhoan_nhomQuyenId_fkey` FOREIGN KEY (`nhomQuyenId`) REFERENCES `nhomquyen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
