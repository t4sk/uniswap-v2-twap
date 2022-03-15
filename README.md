# Uniswap V2 TWAP

```shell
npm i

# copy and edit .env
cp .env.copy .env

# create and paste private key
touch .secret

npx hardhat compile
npx hardhat clean

env $(cat .env) npx hardhat run scripts/deploy.js --network ropsten

CONTRACT_ADDR=
env $(cat .env) npx hardhat verify --network ropsten $CONTRACT_ADDR "Constructor argument 1"
```

### Ropsten

router
0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D

factory
0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f

token
0x453850ce1b1dCaA2A4448658495FdbF02b6919F9

pair
0x3467940F46F4D7E75DaBF25C8d99498E15EF1d51

twap
0xb995C7E94bC6Ec71e0629E7E361168E7Cf77437E
