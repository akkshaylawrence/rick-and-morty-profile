import { ReactElement } from "react";
import { ICharacter } from "../models/api.interface";

type CharacterCardProps = {
  character: ICharacter;
};

function CharacterCard({ character }: CharacterCardProps): ReactElement {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg border-2 hover:border-green-700">
      <div
        className="w-full bg-cover bg-center bg-no-repeat h-80"
        style={{ backgroundImage: `url('${character.image}')` }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{character.name}</div>
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
