import Boom from "@hapi/boom";
import type { NextApiRequest, NextApiResponse } from "next";
import { getConversation } from "../../helpers/chat";
import { methodHandler } from "../../helpers/method-handler";
import { livechatClient } from "../../services/livechat";
import { nlpClient } from "../../services/nlp";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    throw Boom.badRequest("token is required");
  }
  try {
    const chat = await livechatClient.getChat(
      req.headers.authorization as string,
      req.query.id as string
    );
    const converesation = getConversation(chat);
    const report = await nlpClient.getSentiment(converesation);
    res.status(200).json(report);
  } catch (e) {
    console.log(e);
    throw Boom.badGateway();
  }
};

export default methodHandler({ get: getHandler });
