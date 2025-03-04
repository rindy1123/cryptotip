"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { PrimaryButton } from "./components/PrimaryButton";
import { CSSProperties, useState } from "react";
import { Copy } from "./components/Copy";
import { Check } from "./components/Check";

export default function Home() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const [copied, setCopied] = useState(false);
  if (!isConnected) {
    return <PrimaryButton text="Connect Wallet" onClick={() => open()} />;
  }

  const host = process.env.NEXT_PUBLIC_HOST;
  const buttonAttributes: CSSProperties = {
    border: "none",
    outline: "none",
    boxShadow: "none",
    borderRadius: "3e38px",
    backgroundColor: "oklch(.457 .24 277.023)",
    cursor: "pointer",
    color: "white",
    padding: "10px",
    fontSize: "16px",
  };
  const attributesInString = Object.entries(buttonAttributes)
    .reduce((acc, [key, value]) => {
      key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      return `${acc}${key}: ${value}; `;
    }, "")
    .trim();
  const buttonElementText = `
<a href="${host}/tips?addr=${address}">
  <button style="${attributesInString}">
    Cryptotip
  </button>
</a>
  `;
  const onCopy = () => {
    navigator.clipboard.writeText(buttonElementText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl">Preview</h2>
      <div className="flex justify-center items-center mb-7 bg-gray-900 w-xl h-72 border-4 rounded-md border-double border-gray-800">
        <button style={buttonAttributes}>Cryptotip</button>
      </div>
      <div>
        <div className="flex flex-row items-center mb-1">
          <h2 className="mr-2 text-xl">Code</h2>
          <span
            onClick={onCopy}
            className="cursor-pointer text-gray-500 hover:text-gray-400"
          >
            {copied ? <Check /> : <Copy />}
          </span>
        </div>
        <pre className="text-xs bg-zinc-900 px-4 border-1 rounded-md border-solid border-gray-800">
          {buttonElementText}
        </pre>
      </div>
    </div>
  );
}
