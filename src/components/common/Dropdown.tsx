import { ReactElement, useState } from "react";
import { IFilter } from "../../models/api.interface";

type OptionType = { label: string; value: string };

type DropdownProps = {
  onChange: (filter: IFilter) => void;
  value: string | number;
  options: Array<OptionType>;
  label?: string;
  filterKey?: string;
} & typeof defaultProps;

const defaultProps = {
  label: "Dropdown",
  filterKey: "name",
};

function Dropdown({
  onChange,
  label,
  value,
  options,
  filterKey,
}: DropdownProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedItem: string): void => {
    setIsOpen(false);
    onChange({ [filterKey]: selectedItem });
  };

  return (
    <div className="dropdown inline-block relative">
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-1 uppercase">{label}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      {isOpen && (
        <ul className="dropdown-menu absolute text-gray-800 pt-1 -space-y-1">
          {options.map((option: OptionType) => (
            <li>
              <a
                style={{
                  backgroundColor: option.value === value ? "#f3f4f6" : "#fff",
                }}
                className="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;
