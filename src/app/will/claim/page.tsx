"use client";

import { Input } from "@/components/ui/input";
import { Michroma, Road_Rage } from "next/font/google";
import Link from "next/link";

const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-road-rage",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 p-4 text-white bg-[url(/bg.gif)] bg-cover bg-center">
      <div className="z-10 min-h-[10vh] w-screen p-1 pb-0 text-white backdrop-filter backdrop-blur-xs overflow-x-hidden">
        <div className="h-[10vh] flex items-center justify-between px-20 py-10">
          <Link href="/" className="flex items-center gap-5">
            <h1 className={`text-6xl text-cyan-400 ${roadRage.className}`}>
              WillyFi
            </h1>
          </Link>

          <div className="flex gap-8 ml-5">
            <Link
              href={"/will/claim"}
              className={`text-3xl ${michroma.className}`}
            >
              Claim
            </Link>
            <Link
              href={"/will/invest"}
              className={`text-3xl ${michroma.className}`}
            >
              Invest
            </Link>
          </div>

          <button className="px-10 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 mt-3 rounded-md cursor-pointer font-bold">
            Connect
          </button>
        </div>
      </div>

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
