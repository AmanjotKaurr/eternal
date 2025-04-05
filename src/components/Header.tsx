import { Michroma, Road_Rage } from "next/font/google";
import Link from "next/link";
import React from "react";
import WalletButton from "./ui/wallet-button";

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

function Header() {
  return (
    <div className="z-10 min-h-[10vh] w-screen p-1 pb-0 text-white backdrop-filter backdrop-blur-xs overflow-x-hidden">
      <div className="h-[10vh] flex items-center justify-between px-20 py-10">
        <Link href="/" className="flex items-center gap-5">
          <h1 className={`text-6xl text-cyan-400 ${roadRage.className}`}>
            WilliFy
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

        <WalletButton />
      </div>
    </div>
  );
}

export default Header;
