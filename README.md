# Decentralized Voting Application

This is a POC application.

Title: Democracy on the Blockchain: A Voting DApp for the Future by Student Name: Prabagaran Sellamuthu

## Dependencies Installation

1. Install Node.js.
   For instructions on how to install Node.js, please visit the [Node.js installation guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).
2. Install NVM.
   For instructions on how to install NVM , please refer to the [NVM installation setup guide](https://codedamn.com/news/nodejs/nvm-installation-setup-guide).
3. Install Hardhat NPX client and toolbox Hardhat:

```shell
# Install Hardhat
npm install --save-dev hardhat
# Install Hardhat Toolbox
npm i @nomicfoundation/hardhat-toolbox
# Install dotenv
npm install dotenv --save
# Install OpenZeppelin Contracts
npm install @openzeppelin/contracts
# Install the hardhat-ethernal package as a development dependency
npm install hardhat-ethernal
# Install the ethernal package globally
npm install ethernal -g

```

## Steps to Run Decentralized Voting Application

After unzipping the source code from the attachment, run:

```shell
npm install

# If you encounter any issues while installing the packages using the commands provided, you can try the following steps:
# 1. If you encounter permission issues, you can use sudo and clean the local cache:
sudo npm cache clean --force
sudo npm install --force
```

When you run the command `npm install`, it will install all the dependencies listed in the `package.json` file. This command ensures that all the required packages and modules for the project are downloaded and installed locally.

To compile the contract and upload it to the blockchain network, follow these steps:

Start the Hardhat node to provision a private blockchain:

```shell
npx hardhat node
```

Note: Private keys for accounts will be printed after starting the private blockchain. You can import these account details into MetaMask for transactions.

## To deploy it on the Hardhat local Ethereum private network:

```shell
npx hardhat clean
npx hardhat compile
npx hardhat run --network localhost scripts/deploy.js
```

Now contract address will printed, after you deploy the smart contract, then paste the contract address in the constant.js file, run:

```shell
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

```shell
npm start
```

This command `npm start` will start the application. It typically runs the main script defined in the package.json file under the scripts section with the key "start". This could be a command to launch a development server, run a build process, or execute any other necessary tasks to start the application.

## To deploy it on the Sepolia network:

Create a .env file: Add this two varaibles and appropriate your network url and wallet private key
Provide the Sepolia network URL and your wallet's private key to deploy the smart contract in the test network via your wallet.

```shell
API_URL="https://eth-sepolia.g.alchemy.com/v2/XOq1R1O9fwj_lSTAi4l0GyAH7aIqRWL9"
PRIVATE_KEY="Your Wallet Private Key"
```

```shell
npx hardhat clean
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js
```

Now contract address will printed, after you deploy the smart contract, then paste the contract address in the constant.js file, run:

```shell
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

```shell
npm start
```

This command `npm start` will start the application. It typically runs the main script defined in the package.json file under the scripts section with the key "start". This could be a command to launch a development server, run a build process, or execute any other necessary tasks to start the application.

Update .env file:

Create a .env file: Add this two varaibles and appropriate your network url and wallet private key
Provide the Goerli network URL and your wallet's private key to deploy the smart contract in the test network via your wallet.

```shell
API_URL="https://eth-goerli.g.alchemy.com/v2/XOq1R1O9fwj_lSTAi4l0GyAH7aIqRWL9"
PRIVATE_KEY="Your Wallet Private Key"
```

## To deploy it on the Goerli network:

```shell
Copy code
npx hardhat clean
npx hardhat compile
npx hardhat run --network goerli scripts/deploy.js
```

Now contract address will printed, after you deploy the smart contract, then paste the contract address in the constant.js file, run:

```shell
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

```shell
npm start
```

This command `npm start` will start the application. It typically runs the main script defined in the package.json file under the scripts section with the key "start". This could be a command to launch a development server, run a build process, or execute any other necessary tasks to start the application.

This will start the application.

## Usage

Once the application is running, users can interact with the decentralized voting application by following these steps:

1. Open the decentralized voting application in a web browser.
2. Connect your MetaMask wallet to the application by clicking on the MetaMask extension and entering your password.
3. Once logged in, your account address will be displayed on the application interface, indicating a successful connection.
4. View the list of candidates participating in the election along with their respective vote counts.
5. Check the remaining time for voting, indicating how much time is left before the voting period ends.
6. Select a candidate by entering the index corresponding to your preferred candidate into the input field provided.
7. Click on the "Vote" button to cast your vote.
8. MetaMask will prompt you to confirm the transaction, and upon confirmation, your vote will be recorded on the blockchain.
9. Before voting, you can check your eligibility to vote by clicking on the "Check Eligibility" button.
10. The application will verify whether you have already cast your vote, providing feedback accordingly.
11. Once the voting period ends, you can view the final voting results.
12. If the voting status changes to "Voting Finished," you will no longer be able to cast your vote, and the application will display a message indicating that the voting process has concluded.

By following these steps, users can seamlessly participate in the decentralized voting process, ensuring transparency and integrity in elections conducted on the blockchain platform.

## Contributors

- Prabagaran Sellamuthu

## Architecture Diagram
![image](https://github.com/prabagaran-sellamuthu/ethereum-evote/assets/38026104/eb29e334-1c3d-40ac-9a21-a9c913ff68ed)


## Further Assistance

For further assistance or inquiries, please contact Prabagaran Sellamuthu at pgaran788@gmail.com
