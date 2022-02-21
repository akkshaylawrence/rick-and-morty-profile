import { ReactElement } from "react";
import { noop } from "../constants";

type ButtonProps = {
  onClick?: () => void;
  isLoading?: boolean;
};

const defaultProps = {
  onClick: noop,
  isLoading: false,
};

function Button({ onClick, isLoading }: ButtonProps): ReactElement {
  const buttonClasses =
    "inline-flex items-center px-4 py-2 font-semibold leading-6 shadow rounded-md " +
    "text-white bg-green-500 hover:bg-green-600 focus:outline-none hover:ring hover:ring-green-300 " +
    "active:bg-green-700 transition ease-in-out duration-150";

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {isLoading ? "Loading..." : "Search"}
    </button>
  );
}
Button.defaultProps = defaultProps;

export default Button;
