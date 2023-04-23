# single-nft

I wanted to deploy an NFT collection with a single token using onchain svg data, so it lasts forever. IPFS is not super reliable, onchain svg data is way cooler.

I couldn't find any website that does this, so I created this. The repository contains a hardhat environment with a single contract ```SvgNft.sol``` which allows me to do that.

# Usage

```sh
[clone this repo]
[create .env with provider and private keys]
[modify hardhat.config.ts to add the desired network]
[modify the string s to be the svg data]
[modify SvgNft.sol name, ticker, description and trait parameters]
yarn install
yarn hardhat run scripts/deployNft.ts --network {network}
```

Following the above steps, you will have created an NFT collection with a single token, whose data is onchain as svg. The token is minted to ```msg.sender``` and can be sent to anyone.

# Note

This is quite expensive. My 13.7kB SVG file took 15,000,000 gas on Goerli. On Arbitrum, deployment and svg data writing cost about 0.006 Ξ. On Ethereum Mainnet you better keep the SVG very small. 