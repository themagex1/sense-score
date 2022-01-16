import axiosInstance from "./api";
import TokenService from "./token.service";

const axiosR = axiosInstance;
  axiosR.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosR.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "Account/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post("http://localhost:5000/api/Account/refresh", {
              refresh_token: TokenService.getLocalRefreshToken(),
            });

            const { accessToken } = rs.data;

            axiosR.dispatch('auth/refreshToken', accessToken);
            TokenService.updateLocalAccessToken(accessToken);

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );

export default axiosR;