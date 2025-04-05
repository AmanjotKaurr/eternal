"use client";

import Header from "@/components/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerDemo } from "@/components/ui/date";
import { Input } from "@/components/ui/input";

const Page = () => {
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
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light">Amount (ETH)</h1>
            <Input
              className="py-6 mt-2"
              type="number"
              placeholder="Enter amount"
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light mb-2">Select Deadline Date</h1>
            <DatePickerDemo />
          </div>

          <div className="h-[10%] w-[40%] mt-10">
            <div className="flex items-center space-x-2">
              <Checkbox id="charity" />
              <label
                htmlFor="charity"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Donate to charity
              </label>
            </div>
          </div>

          <button className="w-[90%] bg-gray-600 mt-8 h-[5vh] rounded-md text-white/25">
            Create Switch
          </button>
        </div>

        {/* Your Escrows */}
        <div className="h-[20vh] w-[80%] mx-auto bg-gray-500/30 border-white/15 rounded-md mt-6 p-10">
          <h1 className="text-2xl font-bold">Your Escrows</h1>
          <h3 className="text-lg text-white/25 mt-5">No record found</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
