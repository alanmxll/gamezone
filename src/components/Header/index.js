import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import {
  ImageBackground,
  WrapperMaterialIcons,
  WrapperImage,
  HeaderImage,
  HeaderText,
} from "./style";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground source={require("../../../assets/game_bg.png")}>
      <WrapperMaterialIcons>
        <MaterialIcons name="menu" size={28} onPress={openMenu} />
      </WrapperMaterialIcons>
      <WrapperImage>
        <HeaderImage source={require("../../../assets/heart_logo.png")} />
        <HeaderText>{title}</HeaderText>
      </WrapperImage>
    </ImageBackground>
  );
}
