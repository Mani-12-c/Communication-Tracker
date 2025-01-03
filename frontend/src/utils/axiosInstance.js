import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://communication-tracker-backend.vercel.app/api/users/', 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => alert(error)
);

export default axiosInstance;
