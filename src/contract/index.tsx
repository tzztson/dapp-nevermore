import { ethers } from "ethers";

import Abis from "./resource/abis.json";
import Addresses from "./resource/addresses.json";

const supportChainId: number = Number(process.env.REACT_APP_CHAINID) || 10001;

const RPCS: any = {
    10001: "https://mainnet.ethereumpow.org",
    // 4002: "https://rpc.testnet.fantom.network",
};

const providers: any = {
    10001: new ethers.providers.JsonRpcProvider(RPCS[supportChainId]),
    // 4002: new ethers.providers.JsonRpcProvider(RPCS[4002]),
};

const provider = providers[supportChainId];

const StakeContract = new ethers.Contract(
    Addresses.stake,
    Abis.stake,
    provider
);

const TokenContract = new ethers.Contract(
    Addresses.token,
    Abis.token,
    provider
);

export { StakeContract, TokenContract, supportChainId, provider };
