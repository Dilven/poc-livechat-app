import { useChatList } from "../hooks/useChatList";
import { ChatList } from "./ChatList";

export const ReportPanel = () => {
  const { data: chatList } = useChatList();

  return <>{chatList && <ChatList chats={chatList} />}</>;
};
