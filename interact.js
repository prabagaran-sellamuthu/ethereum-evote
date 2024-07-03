async function main() {
    const contractAddress = "00x5fbdb2315678afecb367f032d93f642f64180aa3";
    const myContract = await hre.ethers.getContractAt("NameOfContract", contractAddress);
    
    const mintToken = await myContract.mint(1, { value: ethers.utils.parseEther("0.3") });

    console.log("Trx hash:", mintToken.hash);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });