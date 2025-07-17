import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import ButtonComponent from "../../components/ui/ButtonComponent";
import TableCustom from "../../components/ui/TableCustom";
import TitlePage from "../../components/ui/TitlePage";
import TypeYardService from "../../services/TypeYardService";

const TypeYard = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const header = ["Mã loại", "Tên loại", "Mô tả", "Trạng thái"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const result = await TypeYardService.getAllList();

      if (result?.SUCCESS) {
        setData(result?.DATA);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-1 h-full overflow-hidden gap-2">
      <div className="main-pages w-0 flex-[7] overflow-y-auto px-4">
        <div className="h-10 flex justify-between items-center">
          <TitlePage title={"Loại Sân"} />
          <div className="flex flex-1 justify-end items-center gap-2">
            <ButtonComponent
              icon={MdAdd}
              size={25}
              title={"Thêm"}
              color="red"
            />
            <ButtonComponent
              icon={IoFilterSharp}
              size={25}
              title={"Sắp xếp"}
              color="white"
            />
          </div>
        </div>

        <div>
          <TableCustom
            headers={header}
            data={data.map((item) => [
              item.id,
              item.tenLoaiSan,
              item.moTa,
              item.trangThai == 1
                ? "Hoạt động"
                : item.trangThai == 0
                ? "Dừng"
                : "Đã xóa",
            ])}
            onRowClick={(index, row) => {
              setDetailData(data[index]);
            }}
          />
        </div>
      </div>

      <div className="main-pages w-0 hidden lg:block lg:flex-[3] overflow-y-auto px-4 ">
        <div className="h-10 flex justify-between items-center">
          <TitlePage title={`Danh sách ${detailData?.tenLoaiSan || ""}`} />
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default TypeYard;
