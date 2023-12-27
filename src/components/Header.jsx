import React from "react";
import { Desktop, Mobile } from "../responsive";
import P_header from "./PC/P_header";
import M_header from "./Moblie/M_header";

export default function Header() {
  return (
    <>
      <Desktop>
        <P_header />
      </Desktop>
      <Mobile>
        <M_header />
      </Mobile>
    </>
  );
}
