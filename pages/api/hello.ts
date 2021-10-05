import Boom from '@hapi/boom';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../helpers/method-handler';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log('provided token: ', req.query.code)
    const { data } = await axios.post<any, any>('https://accounts.livechat.com/v2/token', {
      grant_type: 'authorization_code',
      code: req.query.code,
      client_id: process.env.NEXT_PUBLIC_LIVECHAT_APP_CLIENT_ID,
      client_secret: process.env.LIVECHAT_APP_CLIENT_SECRET
    })
    console.log('data: ', data)
    const { data: chats } = await axios.post<any, any>('https://api.livechatinc.com/v3.2/agent/list_chats', {},  {
      headers: { Authorization: `Bearer ${data.access_token}` }
  })
    res.status(200).json({ chats });
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badRequest((e as Error).message, e);
  }
};

export default methodHandler({ get: getHandler });