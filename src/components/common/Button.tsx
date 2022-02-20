import { ReactElement } from "react";

type ButtonProps = {
  onClick?: () => void;
};

const defaultProps = {
  onClick: () => {
    // do nothing.
  },
};

function Button({ onClick }: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 focus:outline-none hover:ring hover:ring-green-300 active:bg-green-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
    >
      Search
    </button>
  );
}
Button.defaultProps = defaultProps;

export default Button;
