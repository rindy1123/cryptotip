"use client";

import Image from "next/image";
import GitHubIcon from "../../../public/github.svg";
import { TipCrypButton } from "./TipCrypButton";

export const Footer = () => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const address = "0x84816027489593FA5b0De6E53274fd1138257B85";
  return (
    <>
      <hr className="text-gray-700" />
      <footer>
        <div className="flex justify-end mt-2 mr-3">
          <div className="flex items-center mx-4">
            <div className="mr-2">Support us</div>
            <div>
              <a
                href={`${host}/tips?addr=${address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TipCrypButton />
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/rindy1123/tipcryp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GitHubIcon}
                width={50}
                height={50}
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm p-3">
          TipCryp © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};
