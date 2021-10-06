import Boom from '@hapi/boom';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../helpers/method-handler';
import { livechatClient } from '../../services/livechat';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("🚀 ~ file: hello.ts ~ line 8 ~ getHandler ~ req.query", req.query)
  if(!req.query.code) {
    throw Boom.badRequest('token is required')
  }
  try {
    const { access_token } = await livechatClient.authorize(req.query.code as string)
    const chats = await livechatClient.getChats(access_token)
    res.status(200).json({ chats });
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badRequest((e as Error).message, e);
  }
};

export default methodHandler({ get: getHandler });