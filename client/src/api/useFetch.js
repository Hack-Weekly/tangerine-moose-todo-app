import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data.");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError({ status: true, message: error.message });
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, isloading };
};
export default useFetch;
