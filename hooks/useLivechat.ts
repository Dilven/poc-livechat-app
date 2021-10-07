import {
  LivechatDispatchContext,
  LivechatStateContext,
} from "../providers/LivechatProvider";
import { useNonNullableContext } from "./useNonNullableContext";

export const useLivechat = () => useNonNullableContext(LivechatStateContext);
export const useLivechatDispatch = () =>
  useNonNullableContext(LivechatDispatchContext);
