const main = async () => {
  // to deploy in blockchain we need to get the wallet address of owner and randomPerson
  const [owner] = await hre.ethers.getSigners();

  //it will get and compile our contract and generate necessary files we need to work our contracts under `artifacts` directory
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  //it will create our local eth network and deploy it but just for this contract
  const waveContract = await waveContractFactory.deploy();

  // wait until our contract is officially deployed to our local blockchain then our constructor runs when we actually deploy.
  await waveContract.deployed();

  //`waveContract.address` it's giving us our contract address and it will find our contract in the blockchain space
  console.log("Contract has been deployed", waveContract.address);
  console.log("Contract has been by:", owner.address);

  //create undefined variable
  let waveCount;

  //first calling the function to get the total waves
  waveCount = await waveContract.getTotalWaves();

  //second calling the function to wave
  let waveTxt = await waveContract.wave();
  await waveTxt.wait();

  //third I'm grabbing the totalWaves function to see if there's any changes
  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    // exit node process with success use 0
    process.exit(0);
  } catch (err) {
    console.log(err);
    // exit node process with failure use 1
    process.exit(1);
  }
};

runMain();
