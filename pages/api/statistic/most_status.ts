
import { NextApiRequest, NextApiResponse } from 'next'
import jsonCharacters from '../../../evo-task-data.json';



const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(jsonCharacters)) {
      throw new Error('Cannot find user data')
    }

    const statusCounts: Map<string, number> = new Map<string, number>();
    jsonCharacters.forEach((character) => {
        const status = character.status;
      
        if (statusCounts.has(status)) {
          statusCounts.set(status, (statusCounts.get(status) ?? 1) +1);
        } else {
          statusCounts.set(status, 1);
        }
      });
  // Find the status with the highest count
  let mostStatus = '';
  let maxCount = 0;
  statusCounts.forEach((count, status) => {
    if (count > maxCount) {
      mostStatus = status;
      maxCount = count;
    }
  });
       res.status(200).json({mostStatus,maxCount})
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}





export default handler


