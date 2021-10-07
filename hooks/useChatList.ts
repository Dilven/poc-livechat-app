import { useQuery } from "react-query";
import { Api } from "../services/api";

export const useChatList = (enabled: boolean | undefined = true) => {
  return useQuery(["chats"], Api.getChats, { enabled });
};
