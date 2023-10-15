import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import Menu from "./common/icons/Menu";
import Logo from "./common/icons/Logo";

export default function Nav({ style }: ViewProps) {
  return (
    <View style={styles.container}>
      <Logo />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
