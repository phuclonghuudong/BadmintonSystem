const TypeYardApi = {
  get_all_loaisan: {
    url: "/loai-san",
    method: "GET",
  },
  create_loaisan: {
    url: "/loai-san/create",
    method: "POST",
  },
  update_loaisan: {
    url: "/loai-san/update/:id",
    method: "PUT",
  },
  delete_loaisan: {
    url: "/loai-san/delete/:id",
    method: "PUT",
  },
  getPagination: {
    url: "/loai-san/pagination", // hoặc /loai-san/pagination
    method: "GET",
  },
};

export default TypeYardApi;
