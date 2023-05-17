import { ReactNode } from "react";
import { DivSrc } from "./style";

interface IDivSrcElements {
  children: ReactNode;
}

export function Div ({ children }: IDivSrcElements) {
    return <DivSrc>{children}</DivSrc>;
  }