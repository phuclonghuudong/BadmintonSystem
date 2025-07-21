import { useTypeYardForm } from "../../hooks/useTypeYardForm.hook";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import TitlePage from "../ui/TitlePage";

const InformationTypeYard = ({ detailData = {}, onSuccess }) => {
  const {
    data,
    setData,
    isLoading,
    handleOnchange,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = useTypeYardForm({ detailData, onSuccess });

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
        <FormSelect
          label="Trạng thái"
          name="trangThai"
          value={data?.trangThai ?? 1}
          onChange={handleOnchange}
          options={[
            { label: "Hoạt động", value: 1 },
            { label: "Tạm ngưng", value: 0 },
            { label: "Đã xóa", value: -1 },
          ]}
        />
      </div>

      <div className="flex justify-center items-center gap-2 py-3">
        <Button
          size={25}
          title={"Thêm"}
          color="blue"
          onClick={handleCreate}
          disabled={isLoading}
        />
        <Button
          size={25}
          title={"Cập nhật"}
          color="green"
          onClick={handleUpdate}
          disabled={isLoading}
        />
        <Button
          size={25}
          title={"Xóa"}
          color="red"
          onClick={handleDelete}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default InformationTypeYard;
