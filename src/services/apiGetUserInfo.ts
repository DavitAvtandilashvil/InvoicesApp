import API from "../api";

export const apiGetUserInfo = async () => {
  const response = await API.get("/auth/me");
  return response.data;
};
