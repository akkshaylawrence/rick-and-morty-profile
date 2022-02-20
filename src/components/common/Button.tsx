import { ReactElement } from "react";

function Button(): ReactElement {
  return (
    <button
      type="button"
      className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
    >
      Search
    </button>
  );
}

export default Button;
