import { ReactElement, useEffect, useState } from "react";
import RickAndMortyApi from "./services/api.service";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";
import { IRickAndMortyData } from "./models/api.interface";

function App(): ReactElement {
  const [apiData, setApiData] = useState<IRickAndMortyData | undefined>(
    undefined
  );

  const getAllCharacters = (): void => {
    RickAndMortyApi.getAllCharacters().then(
      (response: IRickAndMortyData | undefined) => {
        setApiData(response);
      }
    );
  };

  useEffect(() => {
    getAllCharacters();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
    </div>
  );
}

export default App;
