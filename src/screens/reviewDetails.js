import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { images } from "../styles/global";

import { WrapperGlobal } from "../styles/global";

import Card from "../components/Card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <WrapperGlobal>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </WrapperGlobal>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
