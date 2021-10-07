import SDK from "@livechat/chat-sdk";
import { Chat } from "../models/livechat";

const ChatSDK = new SDK({
  debug: true,
});

export const getListChats = (): Chat[] =>
  ChatSDK.methodFactory({
    action: "list_chats",
    payload: {},
  });

export const ChatClient = {
  on: ChatSDK.on,
  off: ChatSDK.off,
  destroy: ChatSDK.destroy,
  init: ChatSDK.init,
  getListChats,
};
