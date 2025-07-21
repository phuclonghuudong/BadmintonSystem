import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import TypeYardService from "../services/TypeYardService";
import useDebounce from "./useDebounce";

const useTypeYardList = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const [searchInput, setSearchInput] = useState("");
  const debouncedKeyword = useDebounce(searchInput, 400);

  const refreshFlag = useRef(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await TypeYardService.getAllListPagination({
        page,
        pageSize,
        sortBy,
        sortOrder,
        keyword: debouncedKeyword,
      });

      if (result?.SUCCESS) {
        setData(result.DATA.data || []);
        setTotalPages(result.DATA.pagination.totalPages || 1);
      }
    } catch (error) {
      toast.error(error?.MESSAGE || "Lỗi tải dữ liệu!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, sortBy, sortOrder, debouncedKeyword, refreshFlag.current]);

  const handleSortToggle = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const handleSearch = (value) => {
    setPage(1);
    setSearchInput(value);
  };

  const refresh = () => {
    refreshFlag.current = refreshFlag.current + 1;
    fetchData();
  };

  return {
    data,
    isLoading,
    detailData,
    setDetailData,
    page,
    pageSize,
    totalPages,
    setPage,
    sortBy,
    sortOrder,
    searchInput,
    handleSortToggle,
    handleSearch,
    fetchData,
    refresh,
  };
};

export default useTypeYardList;
