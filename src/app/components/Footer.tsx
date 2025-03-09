"use client";

import Image from "next/image";
import GitHubIcon from "../../../public/github.svg";

export const Footer = () => {
  return (
    <>
      <hr className="text-gray-700" />
      <footer>
        <div className="flex justify-end">
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
                className="mt-2 mr-3"
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm p-3">
          Tipcryp © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};
