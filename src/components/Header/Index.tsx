import { useState } from "react";
import SearchInput from "../SearchInput";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Button } from "../ui/button";

const index = () => {
  const [isNav,setIsNav] = useState(false);
  const navHandler =()=>{
    setIsNav(!isNav);
  }
  return (
    <header className="bg-gray-50 dark:bg-gray-950 flex flex-col md:flex-row  top-0 w-full z-50 md:p-3">
    <div className="flex items-center w-full max-w-7xl md:m-auto">
    <Logo />
      <div className=" hidden flex-1 ml-auto md:flex items-center justify-evenly ">
        <SearchInput
          placeholder="Search Images Here"
          bg="bg-gray-300 "
          width="w-full max-w-md"
        />
      </div>
      <div className="flex md:hidden items-center ml-auto p-5">
        <Button variant="outline" className="border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-50 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Button>
        <Button onClick={navHandler} variant="secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

        </Button>
      </div>
      <Navbar />
    </div>
     {isNav ? <MobileNav/> : null}
    </header>
  );
};

export default index;
