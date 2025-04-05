"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/ui/date";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 p-4 text-white">
      <div className="sticky top-0 z-10 min-h-[10vh] w-screen bg-zinc-900/80 p-1 pb-0 text-white backdrop-filter backdrop-blur-xs">
        <div className="h-[10vh] flex items-center justify-between border-b-2 border-white/15 px-20 py-10">
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
      </div>

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
          <h1 className="text-2xl font-bold">Create new escrow</h1>

          <div className="h-[10%] w-[90%] mt-10 mb-10">
            <h1 className="text-md font-light">Beneficiary Address</h1>
            <Input
              className="py-6 mt-2"
              type="text"
              placeholder="Enter Ethereum address"
            />
          </div>

          <div className="h-[10%] w-[90%] mt-10">
            <h1 className="text-md font-light">Amount (SOL)</h1>
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

        {/* Test Buttons */}
        <div className="flex gap-3 mx-auto w-[80%] mt-4">
          <button className="px-[15%] py-2 bg-red-400 text-white font-bold rounded-md">
            15s Escrow for testing
          </button>
          <button className="px-[15%] py-2 bg-red-400 text-white font-bold rounded-md">
            30s Escrow for testing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
