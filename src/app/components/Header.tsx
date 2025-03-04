"use client";
import { useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import { SecondaryButton } from "./SecondaryButton";

export const Header = () => {
  const { isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  return (
    <>
      <header className="p-3 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cryptotip</h1>
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
