async function deployVotingContract() {
  // Get the contract factory for the Voting contract
  const VotingContract = await ethers.getContractFactory("Voting");

  // Start deployment, passing candidate names and voting duration as arguments
  const votingInstance = await VotingContract.deploy(["Candidate1", "Candidate2", "Candidate3", "Candidate4"], 90);

  // Log the deployed contract address
  console.log("Voting contract deployed at:", votingInstance.address);
}

// Execute the deployment function
deployVotingContract()
  .then(() => process.exit(0))
  .catch(error => {
      console.error("Error deploying contract:", error);
      process.exit(1);
  });
