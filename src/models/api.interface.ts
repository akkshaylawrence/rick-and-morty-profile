export interface IComplexProperty {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IComplexProperty;
  location: IComplexProperty;
  image: string;
  episode: Array<string>;
  firstEpisode?: string;
  url: string;
  created: string;
  firstSeenEpisode?: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IRickAndMortyData {
  info: IInfo;
  results: Array<ICharacter>;
}

export interface IEpisodeData {
  [key: string]: IEpisode;
}

export interface IFilter {
  [key: string]: string | number;
}
