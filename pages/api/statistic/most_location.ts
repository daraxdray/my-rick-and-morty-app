
// pages/api/character/[id].js (or [id].ts for TypeScript)

import { NextApiRequest, NextApiResponse } from 'next';
import jsonCharacters from '../../../evo-task-data.json';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  

  const humanLocations = new Map();

jsonCharacters.forEach((character) => {
  if (character.species === 'Human') {
    const location = character.location.name;
    if (humanLocations.has(location)) {
      humanLocations.set(location, humanLocations.get(location) + 1);
    } else {
      humanLocations.set(location, 1);
    }
  }
});

// Find the location with the most human characters
let mostLocation = '';
let maxCount = 0;

humanLocations.forEach((count, location) => {
  if (count > maxCount) {
    mostLocation = location;
    maxCount = count;
  }
});

  


  if (!mostLocation) {
    return res.status(404).json({ message: 'Unable to calculate' });
  }

  // If the character is found, return it as JSON
  res.status(200).json({mostLocation,maxCount});
};