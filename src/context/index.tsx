import React from "react";
import { ethers } from "ethers";
import { useWallet } from "use-wallet2";

import { TokenContract, StakeContract } from "../contract";
import { fromBigNum, toBigNum } from "../utils";

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
    myStaking: 0,
    reward1: 0,
    reward2: 0,
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
        if (wallet.status === "connected") {
            getMyData();
        }
    }, [wallet.status]);

    // Get Data
    const getData = async () => {
        try {
            var promiseArr = [];
            var resultArr = [];

            promiseArr.push(StakeContract.totalStakingAmount());
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
                payload: fromBigNum(resultArr[2] * 100, 0),
            });
        } catch (err: any) {
            console.log(err.message);
        }
    };

    const getMyData = async () => {
        try {
            const result: any = await StakeContract.getStakeInfo(
                wallet.account
            );

            const mystake = fromBigNum(result._staking, 18);
            const reward1 = fromBigNum(result._rewardable_1, 18);
            const reward2 = fromBigNum(result._rewardable_2, 18);

            dispatch({
                type: "myStaking",
                payload: mystake,
            });
            dispatch({
                type: "reward1",
                payload: reward1,
            });
            dispatch({
                type: "reward2",
                payload: reward2,
            });
        } catch (err: any) {
            console.log(err.message);
        }
    };

    // Action
    const stake = async (props: PropsStake) => {
        const { amount } = props;
        const signedTokenContract = TokenContract.connect(state.signer);
        await signedTokenContract.approve(
            StakeContract.address,
            toBigNum(amount, 18)
        );

        const signedStakeContract = StakeContract.connect(state.signer);
        await signedStakeContract.stake(toBigNum(amount, 18), wallet.account);
    };

    const claim = async () => {
        const signedStakeContract = StakeContract.connect(state.signer);
        await signedStakeContract.claimRewards();
    };

    const unstake = async () => {
        const signedStakeContract = StakeContract.connect(state.signer);
        await signedStakeContract.unstaking();
    };

    return (
        <GlobalContext.Provider
            value={React.useMemo(
                () => [
                    state,
                    { dispatch, getData, getMyData, stake, claim, unstake },
                ],
                [state]
            )}
        >
            {children}
        </GlobalContext.Provider>
    );
}
