import Boom from '@hapi/boom';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../helpers/method-handler';
import { livechatClient } from '../../services/livechat';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.query.text)
    // const { access_token } = await livechatClient.authorize(req.query.code as string)
    res.status(200).json({ message: 'ok' });
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badGateway();
  }
};

export default methodHandler({ get: getHandler });