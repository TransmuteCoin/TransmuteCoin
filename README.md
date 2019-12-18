# ERC20 Token
ERC20 is a protocol standard that defines certain rules and standards for issuing tokens on Ethereum’s network.

In ‘ERC20’, ERC stands for Ethereum Request For Comments and 20 stands for a unique ID number to distinguish this standard from others.

This project was generated using the ERC20 standard token.

## Token Description :
 Name   : TransmuteCoin  
 Symbol : TRNSC

 There a few core contracts that implement the behavior specified in the Transmute Coin: TransmuteCoin, IERC20, ERC20, ERC20Detailed, Ownable, SafeMath.

## Build, Compile and migration

Run `truffle compile` to compile the project. The configration details of network mentioned in the `truffle-config.js` file.  
Paste the private Key in `.secret` file in project root.  
Replace `infuraKey` in `truffle-config.js`.
```
$ npm i -g truffle  
$ npm i truffle-hdwallet-provider  
$ rm -rf build/  
$ truffle compile  
$ truffle deploy --network mainnet  
```   

## Transmute Coin PROJECT

The project uses:
1. Ethereum blockchain as a base of infrastructure
2. Truffle version 5.1.4
3. Solidity version: "0.5.13"
3. OpenZeppelin version 2.0.0

### Transmute coin summary
1. Transmute coin address: `0x9772bB242A9362c755a128F978d2739994585142`
2. Transmute symbol: TRNSC
3. Transmute decimals: 2

### Project summary
The project consists of ERC20 token contract.

`contracts/Transmute.sol` Contains Transmute coin smart contract. This contract has the ERC20, distribution, totalsupply and transferOwnership. 

There are some important function in Transmute.sol :

 1. `transferOwnership` : you can change the ownership , eg. The current owner is Account 1 , input   the new owner , as the transaction sucessfull. You can check on the Owner() , it shows the current owner.

 After transfering ownership to other address, the total token also get transfer to the new owner.

 2. `contracts/ERC20.sol` Contains the general functionality of the ERC20 token like balanceOf, transfer, increaseAllowance, decreaseAllowance, _mint, _burn, _approve, transferFrom.

 3. `contracts/Ownable.sol` Contains the Authentication of ERC20 Owner token Address and can change the ownership of owner.

 4. `contracts/ERC20Detailed.sol` Contain the details of name, symbol, decimal of the coin. The decimals are only for visualization purposes. All the operations are done using the smallest and indivisible token unit, just as on Ethereum all the operations are done in wei.

 5. `contracts/IERC20.sol` Defines function signatures without specifying behavior; the function names, inputs and outputs, but no process. ERC20 inherits this Interface and is required to implement all the functions described or else the contract will not deploy.


**IMPORTANT: Use the** `openzeppelin library` **In order to add default method while creation token**

