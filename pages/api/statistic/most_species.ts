
import { NextApiRequest, NextApiResponse } from 'next'
import jsonCharacters from '../../../evo-task-data.json';



const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(jsonCharacters)) {
      throw new Error('Cannot find user data')
    }

    const speciesCounts: Map<string, number> = new Map<string, number>();
    jsonCharacters.forEach((character) => {
        const species = character.species;
      
        if (speciesCounts.has(species)) {
          speciesCounts.set(species, (speciesCounts.get(species) ?? 1) +1);
        } else {
          speciesCounts.set(species, 1);
        }
      });
  // Find the species with the highest count
  let mostspecies = '';
  let maxCount = 0;
  speciesCounts.forEach((count, species) => {
    if (count > maxCount) {
      mostspecies = species;
      maxCount = count;
    }
  });


       res.status(200).json({mostspecies,maxCount})
  } catch (err: any) {
    res.status(500).json({ speciesCode: 500, message: err.message })
  }
}





export default handler


