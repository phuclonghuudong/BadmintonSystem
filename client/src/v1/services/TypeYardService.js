// services/typeYardService.js
import { TypeYardApi } from "../apis/api";
import apiService from "./apiService";

const TypeYardService = {
  getAllList: (data) => apiService(TypeYardApi.get_all_loaisan, { data }),
  getDetail: (data) => apiService(TypeYardApi.get_details_loaisan, { data }),
  createData: (data) => apiService(TypeYardApi.create_loaisan, { data }),
  updateData: (data) => apiService(TypeYardApi.update_loaisan, { data }),
  deleteData: (data) => apiService(TypeYardApi.delete_loaisan, { data }),
  getAllListPagination: (queryParams) =>
    apiService(TypeYardApi.getPagination, {
      params: queryParams,
    }),
};

export default TypeYardService;
