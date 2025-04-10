import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

function WalletButton() {
  return (
    <div className="w-fit h-fit border-2 border-cyan-400 rounded-xl p-[0.5px]">
      <ConnectButton
        showBalance={false}
        chainStatus={{ smallScreen: "icon", largeScreen: "full" }}
        accountStatus={"full"}
      />
    </div>
  );
}

export default WalletButton;
