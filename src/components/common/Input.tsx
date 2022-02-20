import { ReactElement } from "react";
import { noop } from "../../constants";

type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const defaultProps = {
  onChange: noop,
};

function Input({ onChange }: InputProps): ReactElement {
  const inputClasses =
    "placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md " +
    "py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 sm:text-sm";

  return (
    <label htmlFor="name" className="relative block flex-grow">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <input
        onChange={onChange}
        className={inputClasses}
        placeholder="Search for your character..."
        type="text"
        name="search"
      />
    </label>
  );
}

Input.defaultProps = defaultProps;

export default Input;
