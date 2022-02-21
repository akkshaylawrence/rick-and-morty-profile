import { ReactElement } from "react";

type TagProps = {
  text: string;
  color?: string;
};

const defaultProps = {
  color: "blue",
};

function Tag({ text, color }: TagProps): ReactElement {
  const tagColor = `bg-${color}-200 text-${color}-700`;

  return (
    <div
      className={`text-xs items-center font-bold uppercase px-3 py-1 ${tagColor} rounded-full`}
    >
      {text}
    </div>
  );
}

Tag.defaultProps = defaultProps;

export default Tag;
