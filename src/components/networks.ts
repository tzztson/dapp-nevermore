export const networks: any = {
    4002: {
        chainId: "0xFA2",
        rpcUrls: ["https://rpc.testnet.fantom.network/"],
        chainName: "Fantom - Testnet",
        nativeCurrency: {
            name: "FTM",
            symbol: "FTM",
            decimals: 18,
        },
        blockExplorerUrls: ["https://testnet.ftmscan.com/"],
    },
    10001: {
        chainId: "0x2711",
        rpcUrls: ["https://mainnet.ethereumpow.org"],
        chainName: "ETHW - Mainnet",
        nativeCurrency: {
            name: "ETHW",
            symbol: "ETHW",
            decimals: 18,
        },
        blockExplorerUrls: ["https://mainnet.ethwscan.com"],
    },
};
