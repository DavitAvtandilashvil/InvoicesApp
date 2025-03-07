import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSignIn } from "../services/apiSignIn";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiSignIn({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("SignIn failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
};
