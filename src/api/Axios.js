import axios from "axios";

let axiosInstance = null;
let headers = {
  "Content-Type": "application/json",
};

function setHeaders(inputHeaders) {
  headers = inputHeaders;
}

function getHeaders() {
  return headers;
}

function getInstance() {
  if (axiosInstance != null) {
    return axiosInstance;
  }

  axiosInstance = axios.create({
    baseURL: "https://localhost:7046/",
    headers: getHeaders(),
  });
  //hook interceptor cài ở đây
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      switch (status) {
        case 400:
          alert(
            "Bad Request. cú pháp yêu cầu không đúng định dạng, khung thông báo yêu cầu không hợp lệ hoặc định tuyến yêu cầu lừa đảo"
          );
          break;
        case 401:
          alert(
            "Unauthorized . the client phải tự xác thực để nhận được phản hồi được yêu cầu"
          );
          break;
        case 403:
          alert("Forbidden.Khách hàng không có quyền truy cập vào nội dung");
          break;
        case 404:
          alert("Not Found.Máy chủ không thể tìm thấy tài nguyên được yêu cầu");
          break;
        default:
          break;
      }
      throw error;
      // return Promise.reject(error);
    }
  );
  return axiosInstance;
}

function get(endpointApiUrl, payload = {}) {
  return getInstance().get(endpointApiUrl, {
    params: payload,
  });
}

function post(endpointApiUrl, payload = {}) {
  console.log(endpointApiUrl);
  return getInstance().post(endpointApiUrl, payload);
}

function put(endpointApiUrl, payload = {}) {
  return getInstance().put(endpointApiUrl, payload);
}

function del(endpointApiUrl, payload = {}) {
  return getInstance().delete(endpointApiUrl, payload);
}

export const Axios = {
  axiosInstance,
  getHeaders,
  setHeaders,
  get,
  post,
  put,
  del,
};
