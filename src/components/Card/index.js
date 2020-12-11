import React from "react";

import { WrapperContent, CardContent } from "./style";

export default function Card({ children }) {
  return (
    <WrapperContent>
      <CardContent>{children}</CardContent>
    </WrapperContent>
  );
}
