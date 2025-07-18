import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import FormInput from "../../../components/ui/FormInput";
import TitlePage from "../../../components/ui/TitlePage";
import TypeYardService from "../../../services/TypeYardService";
import isDataChanged from "../../../utils/isDataChanged";

const InformationTypeYard = ({ detailData = {}, onSuccess }) => {
  const [data, setData] = useState(detailData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(detailData);
  }, [detailData]);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    if (!data?.tenLoaiSan) {
      toast.info("VUI LÒNG NHẬP ĐẦY THỦ THÔNG TIN.");
      return;
    }
    try {
      setIsLoading(true);

      const result = await TypeYardService.createData(data);

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
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
        toast.success(result?.MESSAGE);
        onSuccess?.();
      }
    } catch (error) {
      toast.error(error?.MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const result = await TypeYardService.deleteData(data);
      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        onSuccess?.();
      }
    } catch (error) {
      toast.error(error?.MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="h-10 flex justify-between items-center">
        <TitlePage title={`Thông tin ${detailData?.tenLoaiSan || ""}`} />
      </div>

      <div className="grid gap-2">
        <FormInput
          title="Mã loại:"
          name={"id"}
          value={data?.id ?? ""}
          onChange={handleOnchange}
          disabled
        />
        <FormInput
          title="Tên loại:"
          name={"tenLoaiSan"}
          value={data?.tenLoaiSan ?? ""}
          onChange={handleOnchange}
        />
        <FormInput
          title="Mô tả:"
          name={"moTa"}
          value={data?.moTa ?? ""}
          onChange={handleOnchange}
        />

        <div className="text-xs flex flex-col w-full h-14 justify-between gap-2">
          <label htmlFor={""} className="font-bold">
            Trạng thái
          </label>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 py-3">
        <Button size={25} title={"Thêm"} color="blue" onClick={handleCreate} />
        <Button
          size={25}
          title={"Cập nhật"}
          color="green"
          onClick={handleUpdate}
        />
        <Button size={25} title={"Xóa"} color="red" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default InformationTypeYard;
