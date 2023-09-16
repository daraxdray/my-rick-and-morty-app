// pages/api/character/[id].js (or [id].ts for TypeScript)

import { NextApiRequest, NextApiResponse } from 'next';
import jsonCharacters from '../../../evo-task-data.json';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  const { id } = _req.query; // Extract the ID from the request query

  // Find the character with the specified ID
  const character = jsonCharacters.find((char) => char.id === parseInt(`${id}`));

  if (!character) {
    return res.status(404).json({ message: 'Character not found' });
  }

  // If the character is found, return it as JSON
  res.status(200).json(character);
};