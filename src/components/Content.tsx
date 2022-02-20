import { ReactElement } from "react";
import { IRickAndMortyData } from "../models/api.interface";
import CharacterCard from "./CharacterCard";

type ContentProps = {
  content?: IRickAndMortyData | undefined;
} & typeof defaultProps;

const defaultProps = {
  content: {},
};

function Content({ content }: ContentProps): ReactElement {
  return (
    <div
      style={{ height: "calc(100vh - 220px)" }}
      className="w-full overflow-y-scroll justify-center border-2 rounded-md p-10 my-5"
    >
      <div className="grid grid-cols-3 gap-5">
        {content?.results?.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

Content.defaultProps = defaultProps;

export default Content;
