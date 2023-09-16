
import { NextApiRequest, NextApiResponse } from 'next'
import jsonCharacters from '../../../evo-task-data.json';



const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(jsonCharacters)) {
      throw new Error('Cannot find user data')
    }

    const uniqueOrigins = new Map();

jsonCharacters.forEach((character) => {
  const origin = character.origin.name;
  const species = character.species;

  try{
  // If the origin is not in the map, add it with an empty speciesData map
  if (!uniqueOrigins.has(origin)) {
    uniqueOrigins.set(origin, { name: origin, speciesData: new Map() });
  }

  const originData = uniqueOrigins.get(origin); // Retrieve the origin's data object
  const speciesData = originData.speciesData; // Retrieve the speciesData map
  
  // If the species is not in the speciesData map, add it with a count of 1
  if (!speciesData.has(species)) {
    speciesData.set(species, 1);
  } else {
    // If the species is already in the speciesData map, increment the count
    speciesData.set(species, speciesData.get(species) + 1);
  }
}catch(e){
console.log(e)
}

});

// Convert the uniqueOrigins map to an array of objects
const uniqueOriginsArray = Array.from(uniqueOrigins.values());

const totalUniqueOrigins = uniqueOriginsArray.length;

       res.status(200).json({uniqueOriginsArray,totalUniqueOrigins})
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}





export default handler


