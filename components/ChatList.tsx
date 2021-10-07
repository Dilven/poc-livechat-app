import { Chat as ChatModel } from "../models/livechat";
import { Chat } from "./Chat";

type Props = {
  chats: ChatModel[];
};

export const ChatList = ({ chats }: Props) => {
  return (
    <div style={{ width: "300px" }}>
      {chats.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </div>
  );
};
