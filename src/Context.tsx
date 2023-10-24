import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

const ImageContext = createContext(null);

export const useImageContext = () => useContext(ImageContext);

interface ContextProviderProps {
  children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderProps) => {
  const urls = [
    "https://api.unsplash.com/search/photos",
    "https://api.unsplash.com/photos",
  ];
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(urls[1]);
  const [isPending, setIsPending] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsPending(true);
    try {
      const response = await fetch(
        `${url}?query=${query}&client_id=Rf9OVzUEeAbvE9Hu-rAo0IAdIqcN_uBBWXd1QGiPCD0`
      );
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setIsPending(false);
      if (url === urls[0]) {
        setData(json.results);
        console.log(json);
      } else {
        setData(json);
      }

      setError(null);
    } catch (error) {
      setError(`${error} Could not Fetch Data `);
      setIsPending(false);
    }
  };

  const getImageData = async (imageId) => {
    try {
      const response = await fetch(
        `${urls[1]}/${imageId}?client_id=Rf9OVzUEeAbvE9Hu-rAo0IAdIqcN_uBBWXd1QGiPCD0`
      );
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      console.log(json)
      return json
    } catch (error) {
      return error
    }
  };



  useEffect(() => {
      fetchData();
  }, [url,query]);


  

  const value = {
    data,
    isPending,
    error,
    setQuery,
    getImageData,
    setUrl,
    query,
    urls
  };
  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export default ContextProvider;
