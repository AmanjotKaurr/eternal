"use client";

import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import WalletButton from "@/components/ui/wallet-button";

const Page = () => {
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
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10 mb-10">
            <h1 className="text-md font-light">Claim Address</h1>
            <Input
              className="py-6 mt-2"
              type="text"
              placeholder="Enter Ethereum address"
            />
          </div>

          <button className="w-[90%] bg-gray-600 mt-8 h-[5vh] rounded-md text-white/25">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
