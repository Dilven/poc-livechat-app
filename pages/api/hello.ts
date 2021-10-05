import Boom from '@hapi/boom';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../helpers/method-handler';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const foo = axios.post('https://accounts.livechat.com/v2/token', {
      grant_type: 'authorization_code',
      code: req.query.token,
      client_id: process.env.NEXT_PUBLIC_LIVECHAT_APP_CLIENT_ID,
      client_secret: process.env.LIVECHAT_APP_CLIENT_SECRET
    })
    console.log('foo', foo)
    res.status(200).json({ message: 'hello' });
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badRequest((e as Error).message, e);
  }
};

export default methodHandler({ get: getHandler });