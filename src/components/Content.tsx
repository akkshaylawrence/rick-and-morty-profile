import { ReactElement, useEffect, useState } from "react";
import { ICharacter, IRickAndMortyData } from "../models/api.interface";
import CharacterCard from "./CharacterCard";
import Modal from "./common/Modal";

type ContentProps = {
  content?: IRickAndMortyData | undefined;
} & typeof defaultProps;

const defaultProps = {
  content: {},
};

function Content({ content }: ContentProps): ReactElement {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();

  useEffect(() => {
    if (selectedCharacter) {
      setShowModal(true);
    }
  }, [selectedCharacter]);

  const handleCardSelect = (selectedCard: ICharacter): void => {
    setSelectedCharacter(selectedCard);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <div
        style={{ height: "calc(100vh - 240px)" }}
        className="w-full overflow-y-scroll justify-center border-2 rounded-md p-10"
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
          {content?.results?.map(character => (
            <CharacterCard
              key={character.id}
              onSelect={handleCardSelect}
              character={character}
            />
          ))}
        </div>
        <Modal
          character={selectedCharacter}
          showModal={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedCharacter(undefined);
          }}
        />
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-500">
        Showing <span className="font-semibold text-gray-900 ">1</span> to{" "}
        <span className="font-semibold text-gray-900 ">10</span> of{" "}
        <span className="font-semibold text-gray-900 ">100</span> Characters
      </span>
      <div className="bg-white">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href=""
              className="py-2 px-3 w-10 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
          </li>

          <li>
            <a
              href=""
              className="py-2 px-3 w-10 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Content.defaultProps = defaultProps;

export default Content;
