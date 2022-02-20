import { ReactElement } from "react";
import { IRickAndMortyData } from "../models/api.interface";

type ContentProps = {
  content?: IRickAndMortyData | undefined;
} & typeof defaultProps;

const defaultProps = {
  content: {},
};

function Content({ content }: ContentProps): ReactElement {
  return (
    <div className="w-full border rounded-md p-10 my-5">
      {JSON.stringify(content.results)}
    </div>
  );
}

Content.defaultProps = defaultProps;

export default Content;
