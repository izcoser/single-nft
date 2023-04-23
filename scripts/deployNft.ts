import { ethers } from "hardhat";

async function main() {
  const SvgNft = await ethers.getContractFactory("SvgNft");
  const s = '';
  
  if(s.length === 0){
    throw new Error('svg string is empty.');
  }

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const contract = await SvgNft.deploy();


  await contract.deployed();
  await contract.setSvg(s);

  console.log(
    `SvgNft deployed to ${contract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
