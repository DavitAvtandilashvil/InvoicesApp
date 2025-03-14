import { useEffect, useState } from "react";
import { AllInvoice } from "../types/types";
import { apiGetAllInvoices } from "../services/apiGetAllInvoices";

export const useAllInvoice = (filterParams: string) => {
  const [allInvoices, setAllInvoces] = useState<AllInvoice[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllInvoice = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await apiGetAllInvoices(filterParams);
        setAllInvoces(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllInvoice();
  }, [filterParams]);

  return { allInvoices, loading, error };
};
