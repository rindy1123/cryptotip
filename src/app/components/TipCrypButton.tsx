import { CSSProperties } from "react";
import Coin from "../../../public/coin.svg";
import Image from "next/image";

export const tipCrypButtonAttributes: CSSProperties = {
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
export const tipCrypButtonSVGAttributes: CSSProperties = {
  width: "20px",
  height: "20px",
  marginLeft: "6px",
};

export const TipCrypButton = () => (
  <button style={tipCrypButtonAttributes}>
    TipCryp <Image src={Coin} alt="Coin" style={tipCrypButtonSVGAttributes} />
  </button>
);
