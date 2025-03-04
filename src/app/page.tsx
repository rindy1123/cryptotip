"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { PrimaryButton } from "./components/PrimaryButton";

export default function Home() {
  const host = process.env.NEXT_PUBLIC_HOST;
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  if (!isConnected) {
    return <PrimaryButton text="Connect Wallet" onClick={() => open()} />;
  }

  return (
    <>
      <h2>Preview</h2>
      <a href={`${host}/tips?addr=${address}`}>
        <PrimaryButton text="Cryptotip" />
      </a>
    </>
  );
}
