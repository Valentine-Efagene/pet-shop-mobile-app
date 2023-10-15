import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Font from "../fonts";
import Color from "../colors";
import Nav from "./Nav";

const image = require("../assets/img/hero.jpeg");

export default function Hero() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Nav />
        <View style={styles.details}>
          <Text style={styles.headline}>Welcome to our Pet Shop!</Text>
          <Text style={styles.subHeadline}>
            At our Pet Shop, We offer a wide range of products and services to
            keep your furry friends happy and healthy.
          </Text>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Discover</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.cta2}>
        <Text style={styles.cta2Text}>Discover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 412 / 326,
    height: 326,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "column",
  },
  details: {
    color: Color.textLight,
    width: 200,
    bottom: 30,
    alignItems: "flex-start",
  },
  headline: {
    color: Color.textLight,
    fontSize: 24,
    fontFamily: Font.nunitoBold700,
    marginBottom: 10,
  },
  subHeadline: {
    color: Color.textLight,
    fontFamily: Font.nunitoRegular400,
    fontSize: 8,
    width: 169,
    marginBottom: 8,
  },
  cta: {
    backgroundColor: Color.textLight,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ctaText: {
    fontFamily: Font.nunitoRegular400,
  },
  cta2: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 10,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  cta2Text: {
    fontFamily: Font.nunitoRegular400,
  },
});
