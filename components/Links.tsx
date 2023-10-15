import React from "react";
import { StyleSheet, View } from "react-native";
import Browse from "./link-cards/Browse";
import Constant from "../constants";
import Shop from "./link-cards/Shop";
import Adopt from "./link-cards/Adopt";

export default function Links() {
  return (
    <View style={styles.container}>
      <Browse />
      <Shop />
      <Adopt />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: "center",
    paddingHorizontal: Constant.padding as number,
  },
});
