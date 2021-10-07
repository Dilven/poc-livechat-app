import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultOptions } from "../config/cache";
import { LivechatProvider } from "../providers/LivechatProvider";

const queryClient = new QueryClient({ defaultOptions });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LivechatProvider>
        <Component {...pageProps} />
      </LivechatProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
