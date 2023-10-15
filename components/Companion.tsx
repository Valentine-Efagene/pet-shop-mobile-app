import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import Font from "../fonts";
import Color from "../colors";
import Constant from "../constants";

const image = require("../assets/img/companion.png");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Companion() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find Your Perfect Pet Companion Today</Text>
      <Text style={styles.paragraph}>
        At our pet shop, we offer a wide variety of pets, from playful puppies
        to cuddly kittens. Whether you’re looking for a loyal companion or a
        furry friend to brighten your day, we have the perfect pet for you.{" "}
      </Text>
      <Image
        style={styles.image}
        source={image}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constant.padding,
  },
  image: {
    flex: 1,
    width: "100%",
    aspectRatio: 380 / 475,
    backgroundColor: "#0553",
    borderRadius: 40,
  },
  heading: {
    fontFamily: Font.nunitoBold700,
    fontSize: 24,
    color: Color.textDark,
    alignItems: "flex-start",
    marginBottom: 12,
  },
  paragraph: {
    fontFamily: Font.nunitoRegular400,
    color: Color.textDark,
    fontSize: 12,
    marginBottom: 12,
  },
});
