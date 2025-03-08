"use client";
import { useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import { SecondaryButton } from "./SecondaryButton";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export const Header = () => {
  const { isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  return (
    <>
      <header className="p-3 flex justify-between">
        <div className="m-1">
          <Image src={Logo} width={160} alt="Cryptotip Logo" />
        </div>
        <div>
          {isConnected && (
            <SecondaryButton
              text="Disconnect Wallet"
              onClick={() => disconnect()}
            />
          )}
        </div>
      </header>
      <hr className="text-gray-700" />
    </>
  );
};
