import { useEffect } from "react";
import * as AgentSDK from "@livechat/agent-app-sdk";

export function useAgent(agentData: any | null) {
  const handleCustomerProfile = (_profile: any) => {};
  useEffect(() => {
    if (agentData) {
      const widget = AgentSDK.createDetailsWidget();
      // widget.on("customer_profile", handleCustomerProfile);
    }
    return () => {};
  }, [agentData]);
}
