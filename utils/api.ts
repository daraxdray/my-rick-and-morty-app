import Character, { Origin } from "@/interfaces/character";

type originProp = {
  uniqueOriginsArray: Array<Origin>,
  totalUniqueOrigins: number
}
export type DataProp = { topCharacters: Array<Character>; mostStatus: string; mostLocation: string; mostSpecies: string; originData:originProp; } | null

const BASEURL = "http://localhost:3000/";
export async function fetchAllData() {
    try {
      const [topCharacters, mostStatus, mostLocation, mostSpecies, originData] = await Promise.all([
        fetchTopCharacters(),
        fetchMostStatus(),
        fetchMostLocation(),
        fetchMostSpecies(),
        fetchOriginData(),
      ]);
  
      console.warn(originData)
      
      // Return the fetched data
      return {
        topCharacters,
        mostStatus,
        mostLocation,
        mostSpecies,
        originData,
      } as unknown as DataProp;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  // Define functions to fetch each specific piece of data
  export async function fetchTopCharacters() {
    // Fetch the top 3 characters that appeared in the most episodes
    const res = await fetch(BASEURL+"api/statistic/top_character");
    return await res.json() as Array<Character>;
  }
  
  export async function fetchMostStatus() {
    // Fetch the Status that is assigned to the most characters
    const res = await fetch(BASEURL+"api/statistic/most_status");
    return await res.json();
  }
  
  export async function fetchMostLocation() {
    // Fetch the Location with the most characters of the species "human"
    const res = await fetch(BASEURL+"api/statistic/most_location");
    return await res.json();
  }
  
  export async function fetchMostSpecies() {
    // Fetch the species with the most male characters
    const res = await fetch(BASEURL+"api/statistic/most_species");
    return await res.json();
  }
  
  export async function fetchOriginData() {
    // Fetch data related to unique origin names and species
    const res = await fetch(BASEURL+"api/statistic/origin_data");
    const output = await res.json();

    return output;
  }