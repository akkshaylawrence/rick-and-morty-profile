import { ReactElement, useCallback, useEffect, useState } from "react";
import RickAndMortyApi from "./services/api.service";
import {
  IEpisodeData,
  IFilter,
  IRickAndMortyData,
} from "./models/api.interface";
import { Header, SearchBar, Content } from "./components";
import Filter from "./components/Filter";

function App(): ReactElement {
  const [characterData, setCharacterData] = useState<
    IRickAndMortyData | undefined
  >(undefined);

  const [episodeData, setEpisodeData] = useState<IEpisodeData | undefined>();

  const [searchFilter, setSearchFilter] = useState({
    page: 1,
  });

  const handleFilterChange = (filter: IFilter): void =>
    setSearchFilter(prevValue => ({ ...prevValue, ...filter }));

  const getAllCharacters = useCallback((): void => {
    RickAndMortyApi.getAllCharacters(searchFilter).then(
      (response: IRickAndMortyData | undefined) => setCharacterData(response)
    );
  }, [searchFilter]);

  const getEpisodesForCharacter = (episodes: Array<string>): void => {
    RickAndMortyApi.getAllEpisodes(episodes).then(
      (response: IEpisodeData | undefined) =>
        setEpisodeData(response as IEpisodeData)
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllCharacters(), [searchFilter]);

  useEffect(() => {
    const episodes = characterData?.results.map(
      character => character.episode[0]
    );
    if (episodes) {
      getEpisodesForCharacter(episodes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterData]);

  const handlePageChange = (direction: string): void => {
    const { page } = searchFilter;
    const newPage = direction === "next" ? page + 1 : page - 1;
    setSearchFilter(prevValue => ({ ...prevValue, page: newPage }));
  };

  return (
    <div className="m-auto h-screen max-w-screen-xl p-3 overflow-hidden">
      <div className="flex flex-col mb-3 md:space-y-5 sm:space-y-9">
        <div className="flex flex-nowrap space-x-5 justify-between h-20 mb-1">
          <Header />
          <SearchBar
            handleFilterChange={handleFilterChange}
            onSearch={getAllCharacters}
          />
        </div>
        <Filter
          handleFilterChange={handleFilterChange}
          currentFilter={searchFilter}
        />
      </div>
      {characterData && (
        <Content
          characters={characterData}
          episodes={episodeData}
          currentPage={searchFilter.page}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
