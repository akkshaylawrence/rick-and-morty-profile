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
    <div
      style={{ height: "calc(100vh - 180px)" }}
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
  );
}

Content.defaultProps = defaultProps;

export default Content;
