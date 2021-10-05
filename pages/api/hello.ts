import Boom from '@hapi/boom';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../helpers/method-handler';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ message: 'hello' });
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badRequest((e as Error).message, e);
  }
};

export default methodHandler({ get: getHandler });