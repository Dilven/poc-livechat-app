import { useEffect, useState } from 'react';
import AccountsSDK from '@livechat/accounts-sdk';

const options = {
    client_id: process.env.LIVECHAT_APP_CLIENT_ID
};

const useAuth = () => {
    const [authData, setAuthData] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [isLogging, setIsLogging] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const instance = new AccountsSDK(options);
                const authData = await instance.iframe(options).authorize();
                setIsLogged(true);
                setAuthData(authData);
            } catch (error) {
                console.log('error', error);
            } finally {
                setIsLogging(false);
            }
        })();
    }, []);
    console.log(authData);

    return {
        authData,
        isLogged,
        isLogging,
    };
};

export default useAuth;