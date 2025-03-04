import { useSendTransaction } from "wagmi";
import { Address, isAddress, parseEther } from "viem";
import { useSearchParams } from "next/navigation";

export const Transaction = () => {
  const params = useSearchParams();
  const { data: hash, sendTransaction } = useSendTransaction();
  const to = params.get("addr");

  if (!to) {
    return <div>Invalid URL</div>;
  }

  if (!isAddress(to)) {
    return <div>Invalid Address</div>;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>, to: Address) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <form onSubmit={(e) => submit(e, to)}>
      <div>Send to: {to}</div>
      <input name="value" placeholder="0.05" required />
      <button type="submit">Send</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  );
};
