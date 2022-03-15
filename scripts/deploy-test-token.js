const hre = require("hardhat");

async function main() {
  try {
    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy();

    await token.deployed();

    console.log("Contract deployed to:", token.address);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
