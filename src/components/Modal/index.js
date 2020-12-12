import React from "react";

import { WrapperModal, CloseButton, ModalContent } from "./style";

export default function CustomModal({
  visible,
  animationType,
  closeOnPress,
  children,
}) {
  return (
    <WrapperModal visible={visible} animationType={animationType}>
      <CloseButton onPress={closeOnPress}>
        <ModalContent>{children}</ModalContent>
      </CloseButton>
    </WrapperModal>
  );
}
