import React from "react";
import { ethers } from "ethers";
import { useWallet } from "use-wallet2";

import { TokenContract, StakeContract } from "../contract";
import { fromBigNum } from "../utils";

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
    totalStake: 0,
    totalStaker: 0,
    apy: 0,
};

export default function Provider({ children }: { children: React.ReactNode }) {
    const wallet = useWallet();
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    React.useEffect(() => {
        getData();
    }, []);

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

    const getData = async () => {
        try {
            var promiseArr = [];
            var resultArr = [];

            promiseArr.push(StakeContract.countTotalStake());
            promiseArr.push(StakeContract.stakerNum());
            promiseArr.push(StakeContract.APY());
            resultArr = await Promise.all(promiseArr);

            dispatch({
                type: "totalStake",
                payload: fromBigNum(resultArr[0], 18),
            });
            dispatch({
                type: "totalStaker",
                payload: fromBigNum(resultArr[1], 0),
            });
            dispatch({
                type: "apy",
                payload: fromBigNum(resultArr[2], 0),
            });
        } catch (err: any) {
            console.log(err.message);
        }
    };

    return (
        <GlobalContext.Provider
            value={React.useMemo(() => [state, { dispatch, getData }], [state])}
        >
            {children}
        </GlobalContext.Provider>
    );
}
