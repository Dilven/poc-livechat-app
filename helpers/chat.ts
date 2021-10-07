import { Chat, Event } from "../models/livechat";

const CONVERSATION_SEPARATOR = '. '

export const isMessageEvent = ({ type }: Event) => type === "message"

export const getChatMessages = (chat: Chat) =>
  chat.thread.events
    .filter(isMessageEvent)
    .map(({ text }) => text);

export const getConversation = (chat: Chat) => getChatMessages(chat).join(CONVERSATION_SEPARATOR)