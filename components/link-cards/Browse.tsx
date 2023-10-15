import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import Font from "../../fonts";
import Color from "../../colors";
import { Image } from "expo-image";
import Constant from "../../constants";

export default function Browse() {
  const image = require("../../assets/img/browse.jpeg");
  const arrowRight = require("../../assets/img/arrowRight2x.png");

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableOpacity style={styles.arrow}>
          <Image
            style={styles.icon}
            source={arrowRight}
            placeholder={Constant.blurHash}
            contentFit="cover"
            transition={1000}
          />
        </TouchableOpacity>
        <View style={styles.texts}>
          <Text style={styles.heading}>Browse Our Pet Collection</Text>
          <Text style={styles.paragraph}>
            Choose from a variety of adorable and healthy pets.
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 40,
    aspectRatio: 368 / 232,
    backgroundColor: Color.shade,
    overflow: "hidden",
  },
  image: {
    justifyContent: "space-between",
    padding: 20,
    flex: 1,
  },
  icon: {
    width: 23,
    height: 23,
  },
  texts: {
    alignItems: "center",
    paddingBottom: 20,
  },
  heading: {
    color: Color.textLight,
    textAlign: "center",
    fontSize: 24,
    fontFamily: Font.nunitoBold700,
  },
  paragraph: {
    color: Color.textLight,
    textAlign: "center",
    fontSize: 12,
  },
  arrow: {
    alignSelf: "flex-end",
    position: "relative",
    right: 5,
    top: 5,
  },
});
