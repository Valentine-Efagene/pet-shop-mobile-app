import React from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import Constant from "../constants";

const logo = require("../assets/img/logo2x.png");
const menu = require("../assets/img/menu2x.png");

export default function Nav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Image
          style={styles.icon}
          source={logo}
          placeholder={Constant.blurHash}
          contentFit="cover"
          transition={1000}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={menu}
          placeholder={Constant.blurHash}
          contentFit="cover"
          transition={1000}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
