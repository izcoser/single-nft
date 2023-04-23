import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || ""
const ARBITRUM_RPC_URL = process.env.ARBITRUM_RPC_URL || ""

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    }
  },
  networks: {
    hardhat: {
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    arbitrum: {
      url: ARBITRUM_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 42161,
    },
  }
};

export default config;
