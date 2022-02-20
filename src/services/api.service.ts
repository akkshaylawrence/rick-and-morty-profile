/* eslint-disable consistent-return */
import QueryString from "qs";
import http from "./http-common";
import {
  ICharacter,
  IRickAndMortyData,
  IFilter,
} from "../models/api.interface";

const getFilterApiUrl = (filter: IFilter): string => {
  const query = filter ? `&${QueryString.stringify(filter)}` : "";
  return `character/?page=${filter.page}${query}`;
};

const getAllCharacters = async (
  filter: IFilter
): Promise<IRickAndMortyData | undefined> => {
  try {
    const response = await http.get(getFilterApiUrl(filter));
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getACharacter = async (id: number): Promise<ICharacter | undefined> => {
  try {
    const response = await http.get(`character/${id}`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default { getAllCharacters, getACharacter };
