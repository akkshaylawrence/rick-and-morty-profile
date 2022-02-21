import { ReactElement, useCallback, useEffect, useState } from "react";
import RickAndMortyApi from "./services/api.service";
import { IFilter, IRickAndMortyData } from "./models/api.interface";
import { Header, SearchBar, Content } from "./components";
import Filter from "./components/Filter";

function App(): ReactElement {
  const [apiData, setApiData] = useState<IRickAndMortyData | undefined>(
    undefined
  );

  const [searchFilter, setSearchFilter] = useState({
    page: 1,
  });

  const getAllCharacters = useCallback((): void => {
    RickAndMortyApi.getAllCharacters(searchFilter).then(
      (response: IRickAndMortyData | undefined) => setApiData(response)
    );
  }, [searchFilter]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllCharacters(), [searchFilter]);

  const handleFilterChange = (filter: IFilter): void =>
    setSearchFilter(prevValue => ({ ...prevValue, ...filter }));

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
      <Content
        content={apiData}
        currentPage={searchFilter.page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
