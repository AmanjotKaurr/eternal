import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 p-4 text-white">
      <div className="h-[10vh] flex items-center justify-between  border-b-2 border-white/15 px-20 py-10 ">
        <div className="flex items-center gap-5">
          <h1>WillyFi</h1>
          <div className="bg-gray-600 text-white/40 rounded-full px-4">
            Dashboard
          </div>
        </div>

        <button className="px-10 py-3 bg-violet-500 text-white mt-3 rounded-md cursor-pointer font-bold">
          Connect
        </button>
      </div>

      <div className="min-h-screen w-[80%] border border-white/15 rounded-md m-8 mx-auto p-10">
        <div className="ml-15">
          <h1 className="text-4xl font-bold">Time-Locked Succession</h1>
          <h3 className="text-lg text-white/35">
            Set up automatic transfer of funds if you don't check in regularly
          </h3>
        </div>

        <div className="h-[80vh] w-[80%] mx-auto bg-gray-500/30 border-white/15 rounded-md mt-6 p-10">
          <h1 className="text-2xl font-bold">Create new escrow</h1>
          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light">Beneficiary Address</h1>
            <Input className="py-6 mt-2 " type="text" placeholder="Enter Ethereum address" />
          </div>

          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light">Amount (SOL)</h1>
            <Input className="py-6 mt-2 " type="number" placeholder="Enter Ethereum address" />
          </div>


          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light">Select Deadline Date</h1>
            <Input className="py-6 mt-2 " type="number" placeholder="Enter Ethereum address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
