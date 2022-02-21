import { ReactElement } from "react";
import { ICharacter } from "../models/api.interface";
import { Tag } from "./common";

type CharacterCardProps = {
  character: ICharacter;
  onSelect: (character: ICharacter) => void;
};

function CharacterCard({
  character,
  onSelect,
}: CharacterCardProps): ReactElement {
  const statusColors = (status: string): string => {
    switch (status) {
      case "Alive":
        return "bg-green-200 text-green-700";
      case "Dead":
        return "bg-red-200 text-red-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div
      onClick={() => onSelect(character)}
      className="rounded-md overflow-hidden shadow-md bg-white border-2 hover:border-green-700 cursor-pointer"
      role="button"
    >
      <div
        className="w-full bg-cover bg-center bg-no-repeat h-80"
        style={{ backgroundImage: `url('${character.image}')` }}
      />
      <div className="px-6 pt-3 pb-6">
        <div className="font-bold text-3xl">{character.name}</div>
        <div className="flex space-x-2 pt-2">
          <Tag
            text={character.status}
            className={statusColors(character.status)}
          />
          <div className="text-xs items-center font-bold uppercase py-1 rounded-full">
            {character.location.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
