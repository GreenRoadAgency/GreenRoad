"use client";

import { TypeAnimation } from "react-type-animation";

export default function Badge() {
  return (
    <TypeAnimation
      className="text-light font-medium text-sm"
      sequence={[
        "More customers with better online marketing",
        1000,
        "",
        1000,
        "Better results with greater online presence",
      ]}
      cursor={false}
    />
  );
}
