"use client";

import { abi } from "@/abi/abi";
import Header from "@/components/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { getEscrowInfo } from "@/utls/get-escrow";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Address, parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

const Page = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [receiverAddress, setReceiverAddress] = useState("");
  const [time, setTime] = useState("");
  const [donateToCharity, setDonateToCharity] = useState(false);
  const [escrowInfo, setEscrowInfo] = useState<null | {
    amount: string;
    receiver: string;
    time: number;
    submissionTime: string;
    charity: boolean;
    claimed: boolean;
  }>(null);

  const router = useRouter();
  console.log(time);

  const {
    data: hash,
    isPending,
    error,
    writeContractAsync,
  } = useWriteContract();

  const { isSuccess: isConfirmed, error: writeError } =
    useWaitForTransactionReceipt({
      hash,
    });

  const investFunds = async () => {
    if (!address) {
      toast.error("Please connect your wallet to bet");
      return;
    }
    if (Number(balance?.value.toString() || 0) / 1e18 < amount) {
      toast.error("Insufficient Balance");
      return;
    }
    if (receiverAddress.length < 10) {
      toast.error("Please enter a valid address");
      return;
    }
    if (amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (!time || new Date(time).getTime() <= Date.now()) {
      toast.error("Please select a future date");
      return;
    }
    const seconds = Math.floor(
      new Date(time).getTime() / 1000 - Date.now() / 1000
    );
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    if (!contractAddress) {
      toast.error("Contract address not found");
      return;
    }
    setLoading(true);
    try {
      await writeContractAsync({
        address: contractAddress as Address,
        abi,
        functionName: "inheritFunds",
        args: [
          receiverAddress,
          parseEther(amount.toString()),
          seconds,
          donateToCharity,
        ],
        value: parseEther(amount.toString()),
      });
    } catch (e) {
      console.log(e);
      toast.error("An error occurred");
      setLoading(false);
    }
  };

  const cancelFunds = async () => {
    if (!address) {
      toast.error("Please connect your wallet to bet");
      return;
    }
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    if (!contractAddress) {
      toast.error("Contract address not found");
      return;
    }
    if (escrowInfo?.claimed) {
      toast.error("Will already claimed");
      return;
    }
    setLoading(true);
    try {
      await writeContractAsync({
        address: contractAddress as Address,
        abi,
        functionName: "removeFunds",
      });
    } catch (e) {
      console.log(e);
      toast.error("An error occurred");
      setLoading(false);
    }
  };

  // Enhanced useEffect for error handling
  useEffect(() => {
    // Handle transaction confirmation
    if (isConfirmed && hash) {
      toast.success(
        <span>
          Transaction done successfully.{" "}
          <a
            href={`https://bepolia.beratrail.io/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400"
          >
            View on Explorer
          </a>
        </span>
      );
      setLoading(false);
      router.refresh();
    }

    // Handle pending state
    if (isPending) {
      toast.info("Transaction pending...");
    }

    // Handle errors from useWriteContract
    if (error && loading) {
      setLoading(false);
      toast.error(error.message || "Transaction reverted");
      console.error("Write contract error:", error);
    }

    //Handle errors from transaction receipt
    if (writeError && loading) {
      setLoading(false);
      toast.error(writeError.message || "Transaction failed");
      console.error("Transaction receipt error:", writeError);
    }
  }, [isConfirmed, isPending, error, writeError, hash]);

  useEffect(() => {
    if (address) {
      const fetchEscrowInfo = async () => {
        const data = await getEscrowInfo({ walletAddress: address });
        if (
          data &&
          data.receiver !== "0x0000000000000000000000000000000000000000"
        ) {
          setEscrowInfo({
            amount: data.amount,
            receiver: data.receiver,
            claimed: data.isClaimed,
            submissionTime: data.submissionTime,
            time: data.time,
            charity: data.charity,
          });
        } else {
          setEscrowInfo(null);
        }
      };
      fetchEscrowInfo();
    }
  }, [address]);

  return (
    <div className="min-h-screen w-screen bg-zinc-900 p-4 pt-0 text-white bg-[url(/bg.gif)] bg-cover bg-center">
      <Header />

      {/* Main Content */}
      <div className="min-h-screen w-[80%] border border-white/15 rounded-md m-8 mx-auto p-10">
        <div className="ml-15">
          <h1 className="text-4xl font-bold">Time-Locked Succession</h1>
          <h3 className="text-lg text-white/35">
            Set up automatic transfer of funds if you don't check in regularly
          </h3>
        </div>

        {/* Create new escrow */}
        <div className="max-h-[80vh] w-[80%] mx-auto bg-gray-500/30 border-white/15 rounded-md mt-6 p-10 mb-0">
          <h1 className="text-2xl font-bold">Invest your funds</h1>

          <div className="h-[10%] w-[90%] mt-10 mb-10">
            <h1 className="text-md font-light">Beneficiary Address</h1>
            <Input
              className="py-6 mt-2"
              type="text"
              placeholder="Enter Ethereum address"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light">Amount (ETH)</h1>
            <Input
              className="py-6 mt-2"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light mb-2">Select Deadline Date</h1>
            <input
              type="date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="h-[10%] w-[40%] mt-10">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="charity"
                checked={donateToCharity}
                onCheckedChange={() => setDonateToCharity((prv) => !prv)}
              />
              <label
                htmlFor="charity"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Donate to charity
              </label>
            </div>
          </div>

          <button
            className="w-[90%] bg-gray-600 mt-8 h-[5vh] rounded-md text-white cursor-pointer flex items-center justify-center"
            disabled={loading}
            onClick={investFunds}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Create Switch"
            )}{" "}
          </button>
        </div>

        {/* Your Escrows */}
        <div className="min-h-[20vh] w-[80%] mx-auto bg-gray-500/30 border-white/15 rounded-md mt-6 p-10">
          <h1 className="text-2xl font-bold">Your Escrows</h1>
          {!escrowInfo ? (
            <h3 className="text-lg text-white/25 mt-5">No record found</h3>
          ) : (
            <div className="mt-5">
              <h3 className="text-lg">
                Beneficiary Address: {escrowInfo?.receiver}
              </h3>
              <h3 className="text-lg">Amount: {escrowInfo?.amount} ETH</h3>
              <h3 className="text-lg">
                Submission Time: {escrowInfo?.submissionTime}
              </h3>
              <h3 className="text-lg">
                Charity: {escrowInfo?.charity ? "Yes" : "No"}
              </h3>
              <h3 className="text-lg">
                Claimed: {escrowInfo?.claimed ? "Yes" : "No"}
              </h3>
              <button
                className="bg-gray-600 h-[5vh] flex items-center justify-center p-4 rounded-md text-white cursor-pointer"
                onClick={cancelFunds}
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Cancel Will"
                )}{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
