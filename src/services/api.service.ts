/* eslint-disable consistent-return */
import QueryString from "qs";
import http from "./http-common";
import {
  ICharacter,
  IRickAndMortyData,
  IFilter,
  IEpisode,
  IEpisodeData,
} from "../models/api.interface";

const getFilterApiUrl = (filter: IFilter): string => {
  const query = filter ? `&${QueryString.stringify(filter)}` : "";
  return `character/?${query}`;
};

const getEpisodesFilterQuery = (ids: Array<string>): string =>
  `episode/[${ids.join(",")}]`;

const removeLink = (link: string): string => link.replace(/^\D+/g, "");

const getAllCharacters = async (
  filter: IFilter
): Promise<IRickAndMortyData | undefined> => {
  try {
    const response = await http.get(getFilterApiUrl(filter));
    const { info, results } = response.data;
    return {
      info,
      results: results.map((character: ICharacter) => ({
        ...character,
        episode: character.episode.map(removeLink),
      })),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getAllEpisodes = async (
  ids: Array<string>
): Promise<IEpisodeData | undefined> => {
  try {
    const response = await http.get(getEpisodesFilterQuery(ids));
    return response.data.reduce((acc: IEpisodeData, episode: IEpisode) => {
      return {
        ...acc,
        [episode.id]: episode,
      };
    }, {});
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

export default { getAllCharacters, getACharacter, getAllEpisodes };
