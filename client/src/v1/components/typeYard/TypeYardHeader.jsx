import { IoFilterSharp } from "react-icons/io5";
import ButtonComponent from "../ui/ButtonComponent";
import LoadingAlert from "../ui/LoadingAlert";
import SearchInput from "../ui/SearchInput";
import TitlePage from "../ui/TitlePage";

const TypeYardHeader = ({ isLoading, onSort, onSearch }) => {
  return (
    <div className="h-10 flex justify-between items-center pb-2 w-full gap-4">
      <div className="flex-shrink-0">
        {isLoading ? (
          <LoadingAlert />
        ) : (
          <TitlePage title={"Danh sách loại Sân"} />
        )}
      </div>

      <div className="flex-1 flex justify-center items-center">
        <SearchInput onSearch={onSearch} />
      </div>

      <div className="flex-shrink-0 flex items-center gap-2">
        <ButtonComponent
          icon={IoFilterSharp}
          size={25}
          title={"Sắp xếp"}
          color="white"
          onClick={() => onSort("tenLoaiSan")}
        />
      </div>
    </div>
  );
};

export default TypeYardHeader;
