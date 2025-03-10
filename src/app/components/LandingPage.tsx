import { useAppKit } from "@reown/appkit/react";
import { PrimaryButton } from "./PrimaryButton";

export const LandingPage = () => {
  const { open } = useAppKit();
  return (
    <div className="flex flex-col w-2/3 text-zinc-300">
      <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-6">
        Empower Your Content with TipCryp
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
};
