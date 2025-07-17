import { TypeYardApi } from "../apis/api";
import apiService from "./apiService";

const TypeYardService = {
  getAllList: (data) => apiService(TypeYardApi.get_all_loaisan, { data }),
};

export default TypeYardService;
