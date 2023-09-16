
import { NextApiRequest, NextApiResponse } from 'next'
import jsonCharacters from '../../../evo-task-data.json';



const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(jsonCharacters)) {
      throw new Error('Cannot find user data')
    }

    const tops = jsonCharacters.slice() // Create a copy of the data array
      .sort((a, b) => b.episode.length - a.episode.length) // Sort by the number of episodes in descending order
      .slice(0, 3); // Get the top N characters

    res.status(200).json(tops)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}





export default handler


