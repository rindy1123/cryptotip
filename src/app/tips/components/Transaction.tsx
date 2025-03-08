import { useSendTransaction } from "wagmi";
import { Address, isAddress, parseEther } from "viem";
import { useSearchParams } from "next/navigation";
import { Arrow } from "@/app/components/Arrow";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export const Transaction = () => {
  const params = useSearchParams();
  const to = params.get("addr");
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();
  const { data: hash, sendTransaction } = useSendTransaction();

  // TODO: Fallback pages
  if (!to) {
    return <div>Invalid URL</div>;
  }

  if (!isAddress(to)) {
    return <div>Invalid Address</div>;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>, to: Address) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // TODO: Validate value
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <div className="flex justify-center items-center w-1/3">
      <form
        onSubmit={(e) => submit(e, to)}
        className="flex flex-col items-center h-2/3 bg-zinc-800/60 p-8 rounded-xl"
      >
        <h2 className="text-3xl mb-4">You are tipping</h2>
        <div className="flex justify-center items-center mb-4 w-full">
          <input
            name="value"
            placeholder="0.05"
            required
            className="w-2/3 text-xl rounded-xl bg-gray-800 p-2 border-gray-600 border focus:outline-none focus:ring-0"
          />
          <span className="ml-2 text-xl">ETH</span>
        </div>
        <Arrow />
        <div className="my-4 text-center">
          <h2 className="lg:text-2xl md:text-2xl text-xl">{to}</h2>
          <h3>⚠️Please double-check the address before sending</h3>
        </div>
        {isConnected ? (
          <PrimaryButton type="submit" text="Send" />
        ) : (
          <PrimaryButton
            type="button"
            text="Connect Wallet"
            onClick={() => open()}
          />
        )}
        {hash && <div>Transaction Hash: {hash}</div>}
      </form>
    </div>
  );
};
