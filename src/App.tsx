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
  console.log("App : searchFilter", searchFilter);

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
    <div className="m-auto h-screen max-w-screen-xl p-3 grid grid-cols-1 overflow-hidden">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-20">
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
      <Content
        content={apiData}
        currentPage={searchFilter.page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
