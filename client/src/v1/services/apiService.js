// services/apiService.js
import Axios from "../apis/axiosClient";

const resolveUrl = (url, data) => {
  return url.replace(/:([a-zA-Z_]+)/g, (_, key) => data?.[key] ?? "");
};

const apiService = async (apiConfig, options = {}) => {
  const { url, method } = apiConfig;
  const { data, params, headers, ...rest } = options;

  try {
    const resolvedUrl = resolveUrl(url, data);
    const response = await Axios({
      url: resolvedUrl,
      method,
      data,
      params,
      headers,
      ...rest,
    });

    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export default apiService;

// import Axios from "../apis/axiosClient";

// const apiService = async (apiConfig, options = {}) => {
//   const { url, method } = apiConfig;
//   const { data, params, headers, ...rest } = options;

//   try {
//     const response = await Axios({
//       url,
//       method,
//       data,
//       params,
//       headers,
//       ...rest,
//     });

//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// export default apiService;
