import API from "../api";

interface SignInData {
  email: string;
  password: string;
}

export const apiSignIn = async (data: SignInData) => {
  const response = await API.post("/auth/signin", data);
  return response.data;
};
