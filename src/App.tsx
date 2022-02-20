import { ReactElement, useCallback, useEffect, useState } from "react";
import RickAndMortyApi from "./services/api.service";
import { IFilter, IRickAndMortyData } from "./models/api.interface";
import { Header, SearchBar, Content } from "./components";

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

  useEffect(() => getAllCharacters(), [getAllCharacters]);

  const handleFilterChange = (filter: IFilter): void =>
    setSearchFilter(prevValue => ({ ...prevValue, ...filter }));

  return (
    <div className="m-auto max-w-screen-xl p-3">
      <Header />
      <SearchBar handleFilterChange={handleFilterChange} />
      <Content />
    </div>
  );
}

export default App;
