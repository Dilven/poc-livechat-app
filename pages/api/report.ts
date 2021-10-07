import Boom from "@hapi/boom";
import type { NextApiRequest, NextApiResponse } from "next";
import { methodHandler } from "../../helpers/method-handler";
import { livechatClient } from "../../services/livechat";
import { nlpClient } from "../../services/nlp";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    throw Boom.badRequest("token is required");
  }
  try {
    const chats = await livechatClient.getChats(
      req.headers.authorization as string
    );
    console.log("🚀 ~ file: report.ts ~ line 14 ~ getHandler ~ chats", chats)
    const report = await nlpClient.getSentiment('Verry long text')
    res.status(200).json({ chats, report });
  } catch (e) {
    console.log(e);
    throw Boom.badGateway();
  }
};

export default methodHandler({ get: getHandler });
