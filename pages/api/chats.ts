import Boom from "@hapi/boom";
import type { NextApiRequest, NextApiResponse } from "next";
import { methodHandler } from "../../helpers/method-handler";
import { livechatClient } from "../../services/livechat";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    throw Boom.badRequest("token is required");
  }
  try {
    const chats = await livechatClient.getChats(
      req.headers.authorization as string
    );
    res.status(200).json(chats.chats_summary);
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e);
    throw Boom.badGateway();
  }
};

export default methodHandler({ get: getHandler });
