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

export interface IFilter {
  [key: string]: string | number;
}
