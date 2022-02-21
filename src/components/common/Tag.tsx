import { ReactElement } from "react";

type TagProps = {
  text: string;
  className?: string;
};

const defaultProps = {
  className: "bg-gray-200 text-gray-700",
};

function Tag({ text, className }: TagProps): ReactElement {
  return (
    <div
      className={`text-xs h-6 items-center font-bold uppercase px-3 py-1 rounded-full ${className} `}
    >
      {text}
    </div>
  );
}

Tag.defaultProps = defaultProps;

export default Tag;
