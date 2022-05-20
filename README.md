# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Steps by step:

```shell
mkdir my-wave-portal
cd my-wave-portal
npm init -y
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

To make sure everything works
 npx hardhat compile

Then run
 npx hardhat test
```

Go ahead and delete the file `sample-test.js` under test. Also, delete `sample-script.js` under scripts. Then, delete `Greeter.sol` under contracts. Don't delete the actual folders!

```
This will run in your terminal
 npx hardhat run scripts/[folder name]
```

<br>

## To deploy locally in blockchain

1. Creating a new local Ethereum network.
2. Deploying your contract.
3. Then, when the script ends Hardhat will automatically destroy that local network.

<br>

create a new termnial and run
<br>
⚠️note: do not cancel or delete the new terminal because it won't run on your local network

```
npx hardhat node
```

To deployed it and run

```
npx hardhat run scripts/deploy.js --network localhost
```
