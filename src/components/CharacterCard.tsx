import { ReactElement } from "react";
import { ICharacter } from "../models/api.interface";
import { Tag } from "./common";
import { statusColors } from "./helpers";

type CharacterCardProps = {
  character: ICharacter;
  onSelect: (character: ICharacter) => void;
};

function CharacterCard({
  character,
  onSelect,
}: CharacterCardProps): ReactElement {
  return (
    <div
      onClick={() => onSelect(character)}
      className="rounded-md overflow-hidden shadow-md bg-white border-2 hover:border-green-700 cursor-pointer select-none"
      role="button"
    >
      <div
        className="w-full bg-cover bg-center bg-no-repeat h-80"
        style={{ backgroundImage: `url('${character.image}')` }}
      />
      <div className="flex flex-col items-center space-y-2 px-6 pt-3 pb-3">
        <div className="font-bold text-3xl text-center">{character.name}</div>
        <Tag
          text={character.status}
          className={statusColors(character.status)}
        />
        <div className="text-xs items-center font-bold uppercase pb-1 rounded-full">
          {character.location.name}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
