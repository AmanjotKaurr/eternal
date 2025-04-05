"use client";

import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Address } from "viem";
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { abi } from "@/abi/abi";

const Page = () => {
  const { address } = useAccount();
  const [ancestorAddress, setAncestorAddress] = useState("");
  const [recieverAddresser, setReceiverAddress] = useState("");

  const [loading, setLoading] = useState(false);

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

  const claimFunds = async () => {
    if (!address) {
      toast.error("Please connect your wallet to claim funds");
      return;
    }
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
        functionName: "claimFunds",
        args: [ancestorAddress, recieverAddresser],
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
      toast.success("Transaction confirmed!");
      setLoading(false);
      return;
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
      console.log(writeError);
      toast.error(writeError.message || "Transaction failed");
      console.error("Transaction receipt error:", writeError);
    }
  }, [isConfirmed, isPending, error, writeError, hash]);

  return (
    <div className="min-h-screen w-screen bg-zinc-900 p-4 text-white bg-[url(/bg.gif)] bg-cover bg-center">
      <Header />

      {/* Main Content */}
      <div className=" w-[80%] border border-white/15 rounded-md m-8 mx-auto p-10">
        <div className="ml-15">
          <h1 className="text-4xl font-bold">Time-Locked Succession</h1>
          <h3 className="text-lg text-white/35">
            Set up automatic transfer of funds if you don't check in regularly
          </h3>
        </div>

        {/* Create new escrow */}
        <div className=" w-[80%] mx-auto bg-gray-500/30 border-white/15 rounded-md mt-6 p-10 mb-0">
          <h1 className="text-2xl font-bold">Claim your funds</h1>

          <div className="h-[10%] w-[90%] mt-10 mb-10">
            <h1 className="text-md font-light">Ancestor Address</h1>
            <Input
              className="py-6 mt-2"
              type="text"
              placeholder="Enter Ethereum address"
              value={ancestorAddress}
              onChange={(e) => setAncestorAddress(e.target.value)}
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10 mb-10">
            <h1 className="text-md font-light">Claim Address</h1>
            <Input
              className="py-6 mt-2"
              type="text"
              placeholder="Enter Ethereum address"
              value={recieverAddresser}
              onChange={(e) => setReceiverAddress(e.target.value)}
            />
          </div>

          <button
            className="w-[90%] bg-gray-600 text-white mt-8 h-[5vh] rounded-md cursor-pointer flex items-center justify-center"
            onClick={claimFunds}
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Claim"
            )}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
