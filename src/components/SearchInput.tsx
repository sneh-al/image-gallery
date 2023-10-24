import { useImageContext } from "@/Context";
import { Input } from "./ui/input";

interface SearchInputProps {
  placeholder: string;
  bg: string,
  width:string
}

const SearchInput = ({ placeholder,bg,width }: SearchInputProps) => {
  const {setQuery,urls,setUrl } = useImageContext();
  
 async function handleSubmit(e) {
  e.preventDefault()
  const query  = e.target.query.value
  if(query.trim() !== ''){
    setUrl(urls[0])
    setQuery(query)

  }else{
    setUrl(urls[1])
  }
  } 
  return (
    <form
    onSubmit={handleSubmit}
    className={`flex items-center h-9  ${width} rounded-md border border-gray-200 ${bg} px-3 p-5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24 "
        strokeWidth={1.5}
        stroke="currentColor" 
        className="w-6 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <Input
        className="border-none shadow-none"
        type="input"
        id="query"
        name="query"
        autoComplete="on"
        placeholder={placeholder}
      />
      <Input type="submit" value=""  className="hidden"/>
    </form>
  );
};

export default SearchInput;
