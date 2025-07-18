import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

// UI Components
import ButtonComponent from "../../../components/ui/ButtonComponent";
import LoadingAlert from "../../../components/ui/LoadingAlert";
import TableCustom from "../../../components/ui/TableCustom";
import TitlePage from "../../../components/ui/TitlePage";

// Services
import Pagination from "../../../components/ui/Pagination";
import TypeYardService from "../../../services/TypeYardService";
import InformationTypeYard from "./InformationTypeYard";

const TypeYard = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Pagination & Sorting
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [keyword] = useState("");

  const header = ["STT", "Mã loại", "Tên loại", "Mô tả", "Trạng thái"];

  useEffect(() => {
    fetchData();
  }, [page, sortBy, sortOrder]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await TypeYardService.getAllListPagination({
        page,
        pageSize,
        sortBy,
        sortOrder,
        keyword,
      });

      if (result?.SUCCESS) {
        setData(result.DATA.data || []);
        setTotalPages(result.DATA.pagination.totalPages || 1);
      }
    } catch (error) {
      toast.error(error?.MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortToggle = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <main className="flex flex-1 h-full overflow-hidden gap-2">
      <div className="main-pages w-0 flex-[7] flex flex-col overflow-y-auto px-4">
        <div className="h-10 flex justify-between items-center">
          <TitlePage title={"Loại Sân"} />
          {isLoading && <LoadingAlert />}
          <div className="flex flex-1 justify-end items-center gap-2">
            <ButtonComponent
              icon={IoFilterSharp}
              size={25}
              title={"Sắp xếp"}
              color="white"
              onClick={() => handleSortToggle("tenLoaiSan")}
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto pb-4">
          <TableCustom
            headers={header}
            data={data.map((item, index) => [
              (page - 1) * pageSize + index + 1,
              item.id,
              item.tenLoaiSan,
              item.moTa,
              item.trangThai === 1
                ? "Hoạt động"
                : item.trangThai === 0
                ? "Dừng"
                : "Đã xóa",
            ])}
            onRowClick={(index) => {
              setDetailData(data[index]);
            }}
          />
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>

      <div className="main-pages w-0 hidden lg:block lg:flex-[3] overflow-y-auto px-4">
        <InformationTypeYard
          detailData={detailData}
          onSuccess={() => {
            fetchData();
            setDetailData(null);
          }}
        />
      </div>
    </main>
  );
};

export default TypeYard;
