import React from "react";

import { WrapperButton, Button, TextButton } from "./style";

export default function CustomButton({ text, onPress }) {
  return (
    <WrapperButton>
      <Button onPress={onPress}>
        <TextButton>{text}</TextButton>
      </Button>
    </WrapperButton>
  );
}
