import { Button } from "../ui/button";

const ThemeToggler = () => {
  const handleTheme = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <Button
      onClick={handleTheme}
      variant="outline"
      className="border-0 text-gray-950 dark:text-gray-50 flex gap-1 items-center"
    >
      <span className="md:hidden lg:block">Theme</span>
      <svg
        width="38"
        height="19"
        className="  fill-gray-950 dark:fill-gray-50 dark:rotate-180 transition-colors duration-500 ease-in-out "
        viewBox="0 0 38 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.413043"
          y="0.413043"
          width="37.1739"
          height="18.1739"
          rx="9.08696"
          fill="inherit"
          stroke="#A7A7A7"
          strokeWidth="0.826087"
        />
        <circle
          cx="9.49993"
          cy="9.49999"
          r="7.84783"
          fill="inherit"
          className="fill-gray-50 dark:fill-gray-500 "
        />
      </svg>
    </Button>
  );
};

export default ThemeToggler;
