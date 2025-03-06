import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSignUp } from "../services/apiSignUp";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const signUp = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiSignUp({ name, email, password });

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // Redirect to home page
      navigate("/home");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // If it's a native JS Error
      } else {
        setError("Signup failed"); // Generic fallback error message
      }
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading, error };
};
