"use client";
import { Transaction } from "./components/Transaction";
import { Suspense } from "react";
import { Loading } from "../components/Loading";

export default function Tips() {
  return (
    <Suspense fallback={<Loading />}>
      <Transaction />
    </Suspense>
  );
}
