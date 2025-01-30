import axios from "axios";
import { getAccessToken, removeFromStorage } from "../lib/cookie/getToken";
import { errorCatch } from "../utils/catchApiError";
import { Api } from "../api/api";
const options = {
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);
axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 ||
      errorCatch(error) === "jwt expired" ||
      (errorCatch(error) === "jwt must be provided" &&
        !originalRequest._isRetry)
    ) {
      originalRequest._isRetry = true;

      try {
        await Api.auth.getNewTokens();
        return axiosWithAuth.request(originalRequest);
      } catch (err) {
        if (errorCatch(err) === "jwt expired") {
          removeFromStorage();
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export { axiosClassic, axiosWithAuth };
