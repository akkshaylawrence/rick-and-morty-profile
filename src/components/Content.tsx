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
    <div className="w-full justify-center border-2 rounded-md p-10 my-5 grid grid-cols-3 gap-2">
      {content?.results?.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

Content.defaultProps = defaultProps;

export default Content;
