import { useEffect, useRef, useState } from 'react';
import { accountsSdk } from "@livechat/accounts-sdk";

const options = {
	client_id: process.env.NEXT_PUBLIC_LIVECHAT_APP_CLIENT_ID,
	response_type: 'code',
	redirect_uri: 'https://poc-livechat-app.vercel.app/',
};

	const useAuth = () => {
		const [authData, setAuthData] = useState<null | { code: string }>(null);
		const [isLogged, setIsLogged] = useState(false);

		const [isLoading, setLoading] = useState(true);
		const authInstance = useRef(null);

		useEffect(() => {
			authInstance.current = accountsSdk.init({
				...options,
				onIdentityFetched: (error: any, data: any) => {
					setLoading(false);
					if (data) {
						setAuthData(data);
						setIsLogged(true)
					}
					if (error) {
						console.error(error);
					}
				}
			});
		}, []);

		const singIn = () => {
			if(!authInstance.current) {
				throw Error('something went wrong')
			}
			(authInstance.current as any).openPopup()
		}
		return {
			authData,
			isLogged,
			isLoading,
			singIn
		};
	};

	export default useAuth;