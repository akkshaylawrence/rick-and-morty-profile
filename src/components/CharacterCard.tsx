import { ReactElement } from "react";
import { ICharacter } from "../models/api.interface";

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
      className="rounded-md overflow-hidden shadow-lg border-2 border-white hover:border-green-700 cursor-pointer"
      role="button"
    >
      <div
        className="w-full bg-cover bg-center bg-no-repeat h-80"
        style={{ backgroundImage: `url('${character.image}')` }}
      />
      <div className="px-6 py-3">
        <div className="font-bold text-2xl">{character.name}</div>
      </div>
      <div className="px-6 pb-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

export default CharacterCard;
