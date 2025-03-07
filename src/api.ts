import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// Request Interceptor: Attach token only if valid
API.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token && token !== "undefined" && token !== "null") {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error attaching token:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle token errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        console.warn("Token expired or invalid. Logging out...");
        localStorage.removeItem("token");
        window.location.href = "/auth"; // Redirect to login page
      } else if (status === 400) {
        console.warn("Bad Request: Check your request payload or headers.");
        window.location.href = "/auth"; // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

export default API;
