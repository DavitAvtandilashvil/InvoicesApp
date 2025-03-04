import API from "../api";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const apiSignUp = async (data: SignUpData) => {
  const response = await API.post("/auth/signup", data);
  console.log(response);
  return response.data;
};
