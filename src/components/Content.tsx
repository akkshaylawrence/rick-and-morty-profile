import { ReactElement, useEffect, useState } from "react";
import {
  ICharacter,
  IEpisodeData,
  IRickAndMortyData,
} from "../models/api.interface";
import CharacterCard from "./CharacterCard";
import { Modal, Pagination } from "./common";
import EmptyState from "./common/EmptyState";

type ContentProps = {
  characters?: IRickAndMortyData | undefined;
  episodes?: IEpisodeData | undefined;
  currentPage?: number;
  handlePageChange: (direction: string) => void;
} & typeof defaultProps;

const defaultProps = {
  currentPage: 1,
  episodes: {},
  characters: {},
};

function Content({
  characters,
  episodes,
  currentPage,
  handlePageChange,
}: ContentProps): ReactElement {
  const { info, results } = characters as IRickAndMortyData;
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();
  useEffect(() => {
    if (selectedCharacter) {
      setShowModal(true);
    }
  }, [selectedCharacter]);

  const handleCardSelect = (selectedCard: ICharacter): void => {
    const firstEpisode = episodes[selectedCard.episode[0]];
    setSelectedCharacter({
      ...selectedCard,
      firstEpisode: `${firstEpisode.episode} - ${firstEpisode.name}`,
    } as ICharacter);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <div
        style={{ height: "calc(100vh - 270px)" }}
        className="w-full bg-gray-50 shadow-inner overflow-y-scroll justify-center rounded-md p-5 md:p-7 lg:p-10"
      >
        {results ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {results?.map(character => (
              <CharacterCard
                key={character.id}
                onSelect={handleCardSelect}
                character={character}
              />
            ))}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <EmptyState />
          </div>
        )}

        <Modal
          character={selectedCharacter}
          showModal={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedCharacter(undefined);
          }}
        />
      </div>
      <Pagination
        total={info?.count || 0}
        pageSize={20}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

Content.defaultProps = defaultProps;

export default Content;
