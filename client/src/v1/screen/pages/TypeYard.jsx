import InformationTypeYard from "../../components/typeYard/InformationTypeYard";
import TypeYardHeader from "../../components/typeYard/TypeYardHeader";
import Pagination from "../../components/ui/Pagination";
import TableCustom from "../../components/ui/TableCustom";
import useTypeYardList from "../../hooks/useTypeYardList";

const TypeYard = () => {
  const headers = ["STT", "Mã loại", "Tên loại", "Mô tả", "Trạng thái"];

  const {
    data,
    isLoading,
    detailData,
    setDetailData,
    page,
    pageSize,
    totalPages,
    setPage,
    handleSortToggle,
    handleSearch,
    searchInput,
    refresh,
  } = useTypeYardList();

  return (
    <main className="flex flex-1 h-full overflow-hidden gap-2">
      <div className="main-pages w-0 flex-[7] flex flex-col overflow-y-auto px-4">
        <TypeYardHeader
          isLoading={isLoading}
          onSort={handleSortToggle}
          onSearch={handleSearch}
        />

        <div className="flex-grow overflow-y-auto pb-4">
          <TableCustom
            headers={headers}
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
            refresh();
            setDetailData(null);
          }}
        />
      </div>
    </main>
  );
};

export default TypeYard;
