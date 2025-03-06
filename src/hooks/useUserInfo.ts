import { useEffect, useState } from "react";
import { apiGetUserInfo } from "../services/apiGetUserInfo";
import { UserInfo } from "../types/types";

export const useUserInfo = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await apiGetUserInfo();
        setUser(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // If it's a native JS Error
        } else {
          setError("something went wrong"); // Generic fallback error message
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { user, loading, error };
};
