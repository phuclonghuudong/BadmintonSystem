import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TypeYardService from "../services/TypeYardService";
import isDataChanged from "../utils/isDataChanged";

export const useTypeYardForm = ({ detailData = {}, onSuccess }) => {
  const [data, setData] = useState(detailData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (detailData?.id) {
      fetchData();
    } else {
      setData(detailData);
    }
  }, [detailData]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await TypeYardService.getDetail(detailData || "");
      if (result?.SUCCESS) {
        setData(result.DATA);
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: name === "trangThai" ? parseInt(value) : value,
    }));
  };

  const handleCreate = async () => {
    if (!data?.tenLoaiSan) {
      toast.info("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN.");
      return;
    }

    try {
      setIsLoading(true);
      const result = await TypeYardService.createData(data);
      if (result?.SUCCESS) {
        toast.success(result.MESSAGE);
        onSuccess?.();
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!data?.id) {
      toast.info("KHÔNG CÓ THÔNG TIN ĐỂ CẬP NHẬT.");
      return;
    }

    if (!isDataChanged(detailData, data)) {
      toast.info("KHÔNG CÓ THAY ĐỔI NÀO ĐỂ THAO TÁC.");
      return;
    }

    try {
      setIsLoading(true);
      const result = await TypeYardService.updateData(data);
      if (result?.SUCCESS) {
        toast.success(result.MESSAGE);
        onSuccess?.();
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!data?.id) {
      toast.info("KHÔNG CÓ THÔNG TIN ĐỂ XÓA.");
      return;
    }
    try {
      setIsLoading(true);
      const result = await TypeYardService.deleteData(data);
      if (result?.SUCCESS) {
        toast.success(result.MESSAGE);
        onSuccess?.();
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    setData,
    isLoading,
    handleOnchange,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};
