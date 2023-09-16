import { NextApiRequest, NextApiResponse } from 'next'
import jsonCharacters from '../../../evo-task-data.json';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(jsonCharacters)) {
      throw new Error('Cannot find user data')
    }
    res.status(200).json(jsonCharacters)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
