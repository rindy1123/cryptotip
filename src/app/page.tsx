"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import Coin from "../../public/coin.svg";
import { PrimaryButton } from "./components/PrimaryButton";
import { CSSProperties, useState } from "react";
import { Copy } from "./components/Copy";
import { Check } from "./components/Check";
import { cssAttributesToString } from "@/utils/css";
import Image from "next/image";

export default function Home() {
  const { open } = useAppKit();
  // TODO: Loading spinner
  const { address, isConnected } = useAppKitAccount();
  const [copied, setCopied] = useState(false);
  if (!isConnected) {
    return (
      <div className="flex flex-col w-2/3">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-6">
          Empower Your Content with Cryptotip
        </h2>
        <div className="mb-8 text-xl leading-relaxed">
          <p>
            Connect with your audience like never before. Our platform enables
            creators, artists, and influencers to receive cryptocurrency tips
            directly from their supporters and fans.
          </p>
          <p className="mt-4">Getting started is simple:</p>
          <ol className="list-none list-inside mt-2 space-y-2 text-lg font-medium">
            <li>
              <strong>1. Connect Your Wallet:</strong> Click the button below to
              link your wallet to our app.
            </li>
            <li>
              <strong>2. Generate Your Button:</strong> Create a personalized
              tipping button to share with your audience.
            </li>
            <li>
              <strong>3. Place It Anywhere:</strong> Embed the button on your
              website, social media, or anywhere else you connect with fans.
            </li>
          </ol>
          <p className="mt-4">
            Start monetizing your passion and building stronger connections with
            your community today!
          </p>
        </div>
        <div className="flex-none">
          <PrimaryButton
            type="button"
            text="Connect Wallet"
            onClick={() => open()}
          />
        </div>
      </div>
    );
  }

  const host = process.env.NEXT_PUBLIC_HOST;
  const buttonAttributes: CSSProperties = {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    boxShadow: "none",
    borderRadius: "3e38px",
    backgroundColor: "oklch(.457 .24 277.023)",
    cursor: "pointer",
    color: "white",
    padding: "10px",
    fontSize: "18px",
  };
  const buttonSVGAttributes: CSSProperties = {
    width: "20px",
    height: "20px",
    marginLeft: "6px",
  };
  const buttonElementText = `
<a href="${host}/tips?addr=${address}">
  <button style="${cssAttributesToString(buttonAttributes)}">
    Cryptotip
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" style="${cssAttributesToString(buttonSVGAttributes)}">
      <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
      <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clip-rule="evenodd" />
    </svg>
  </button>
</a>
  `;
  const onCopy = () => {
    navigator.clipboard.writeText(buttonElementText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col items-center w-2/3 my-1">
      <h2 className="mb-2 text-2xl">Preview</h2>
      <div className="flex justify-center items-center mb-7 bg-gray-900 lg:w-1/3 md:w-1/2 w-2/3 h-72 border-4 rounded-md border-double border-gray-800">
        <button style={buttonAttributes}>
          Cryptotip <Image src={Coin} alt="Coin" style={buttonSVGAttributes} />
        </button>
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
        <pre className="text-xs text-pretty bg-zinc-900 px-4 border-1 rounded-md border-solid border-gray-800">
          {buttonElementText}
        </pre>
      </div>
    </div>
  );
}
