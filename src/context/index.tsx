import React from "react";
import { ethers } from "ethers";
import { useWallet } from "use-wallet2";

import { toBigNum, fromBigNum } from "../utils";

const GlobalContext = React.createContext({});

export function useGlobalContext() {
    return React.useContext(GlobalContext);
}

function reducer(
    state: any,
    { type, payload }: { type: string; payload: any }
) {
    return {
        ...state,
        [type]: payload,
    };
}

const INIT_STATE: PropsObject = {
    signer: null,
    price: 0,
};

export default function Provider({ children }: { children: React.ReactNode }) {
    const wallet = useWallet();
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    /* ------------ Wallet Section ------------- */
    React.useEffect(() => {
        const getSigner = async () => {
            if (wallet.status === "connected") {
                const provider = new ethers.providers.Web3Provider(
                    wallet.ethereum
                );
                const signer = provider.getSigner();

                dispatch({
                    type: "signer",
                    payload: signer,
                });
            }
        };

        getSigner();
    }, [wallet.status]);

    return (
        <GlobalContext.Provider
            value={React.useMemo(() => [state, { dispatch }], [state])}
        >
            {children}
        </GlobalContext.Provider>
    );
}
