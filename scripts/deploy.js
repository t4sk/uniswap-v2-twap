const hre = require("hardhat");

async function main() {
  try {
    const UniswapV2Twap = await hre.ethers.getContractFactory("UniswapV2Twap");
    const twap = await UniswapV2Twap.deploy(process.env.PAIR);

    await twap.deployed();

    console.log("Contract deployed to:", twap.address);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
