import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        setIsPending(true);
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(response.statusText);
          const json = await response.json();
          setIsPending(false);
          setData(json);
          setError(null);
        } catch (error) {
          setError(`${error} Could not Fetch Data `);
          setIsPending(false);
        }
      };
    useEffect(() => {
    
      fetchData();
    }, []);
    return { data, isPending, error };
  };


  export default useFetch