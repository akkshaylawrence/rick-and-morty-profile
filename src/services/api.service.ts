/* eslint-disable consistent-return */
import http from "./http-common";
import { ICharacter, IRickAndMortyData } from "../models/api.interface";

const getAllCharacters = async (
  pageNumber = 1
): Promise<IRickAndMortyData | undefined> => {
  try {
    const response = await http.get(`character/?page=${pageNumber}`);
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
