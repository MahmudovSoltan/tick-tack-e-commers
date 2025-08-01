"use client";

import { store } from "@/app/store/store";
import { Provider } from "react-redux";


export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
