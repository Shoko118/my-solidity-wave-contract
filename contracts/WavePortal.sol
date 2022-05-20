// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    // unsigned interger and this variables is state variables (declared outside funtion and stored on blockchain)
    uint256 totalWaves;
    
    constructor(){
        console.log("yoyo im here");
    }

    function wave() public {
        totalWaves += 1;

        // `msg.sender` the person who call this function
        console.log("it has waved", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("we have total waves", totalWaves);
        return totalWaves;
    }
}