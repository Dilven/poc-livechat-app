import { useEffect, useState } from "react";
import { ChatSDK } from "../services/chat";

type Chat = any
type Data = {
    payload: {
        chat: Chat
        chat_id: number
    }
}
type PickChat = (chat: Chat) => void
export function useChatList(agentData: any, pickChat: PickChat) {
    const [chatList, setChatList] = useState<Chat[]>([]);

    useEffect(() => {
        if (agentData) {
          ChatSDK.init({ access_token: agentData.access_token });
          return ChatSDK.destroy;
        }
      }, [agentData]);

    useEffect(() => {
        let isMounted = true;

        const handleIncomingChats = (data: Data) => {
            console.log("🚀 ~ file: useChatList.ts ~ line 18 ~ handleIncomingChats ~ data", data)
            const incomingChat = data.payload.chat;

            if (isMounted && !chatList.some(({ id }) => id === incomingChat.id)) {
                if (!chatList.length) pickChat(incomingChat);
                setChatList([...chatList, incomingChat]);
            }
        };

        const handleClosingThread = (data: Data) => {
            const closedChat = data.payload.chat_id;
            const updatedChatList = chatList.filter(({ id }) => id !== closedChat);

            if (isMounted) {
                setChatList(updatedChatList);
                pickChat(null)
            }
        };

        ChatSDK.on("incoming_chat_thread", handleIncomingChats);
        ChatSDK.on("thread_closed", handleClosingThread);

        return () => {
            ChatSDK.off("incoming_chat_thread", handleIncomingChats);
            ChatSDK.off("thread_closed", handleClosingThread);
            isMounted = false;
        };
    }, [chatList, pickChat]);

    return { chatList, setChatList };
}