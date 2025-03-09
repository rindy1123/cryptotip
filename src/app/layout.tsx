import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "./context/Web3Provider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Tipcryp",
  description:
    "Connect with your audience like never before. Our platform enables creators, artists, and influencers to receive cryptocurrency tips directly from their supporters and fans.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-screen">
        <Web3Provider>
          <Header />
          <main className="flex flex-1 justify-center items-center">
            {children}
          </main>
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
