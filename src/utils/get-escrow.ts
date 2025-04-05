import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
  "https://bepolia.rpc.berachain.com/"
);
const contractAddress = "0xCA557c11Cba9715B905B057293dF364f03BE4415";

const abi = [
  "function inherit(address owner) view returns (uint256,address,uint256,uint256,bool,bool)",
];

const contract = new ethers.Contract(contractAddress, abi, provider);

export async function getEscrowInfo({
  walletAddress,
}: {
  walletAddress: string;
}) {
  try {
    const data = await contract.inherit(walletAddress);

    const [amount, receiver, time, submissionTime, isClaimed, charity] =
      data as [bigint, string, bigint, bigint, boolean, boolean];

    return {
      amount: ethers.formatEther(amount), // from wei to ETH
      receiver,
      time: Number(time), // or format to readable date
      submissionTime: new Date(Number(submissionTime) * 1000).toLocaleString(), // if it's a Unix timestamp
      isClaimed,
      charity,
    };
  } catch (error: any) {
    console.error("Error fetching escrow info:", error.message || error);
    return null;
  }
}
