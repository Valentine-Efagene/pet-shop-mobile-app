import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import Font from "../fonts";
import Color from "../colors";
import Constant from "../constants";

const image = require("../assets/img/family.png");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Family() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find the Pur-fect Pet for Your Family</Text>
      <Text style={styles.paragraph}>
        At our pet shop, we offer a wide selection of healthy and happy pets.
        Our knowledgeable staffs are here to help find the perfect companion for
        your family. We have the pet tha t will bring joy to your home.
      </Text>
      <Image
        style={styles.image}
        source={image}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.heading}>Find the Perfect Pet Today!</Text>
      <Text
        style={{
          ...styles.paragraph,
          fontSize: 10,
          textAlign: "center",
          width: 244,
          alignSelf: "center",
        }}
      >
        At our pet shop, we make the process of purchasing a pet or product easy
        and enjoyable. With a wide selection of pets and high-quality products,
        you will find everything you need to care for your furry friends.
      </Text>
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
    marginBottom: 12,
  },
  heading: {
    fontFamily: Font.nunitoBold700,
    fontSize: 24,
    color: Color.textDark,
    alignItems: "flex-start",
    marginBottom: 8,
  },
  paragraph: {
    fontFamily: Font.nunitoRegular400,
    color: Color.textDark,
    fontSize: 12,
    marginBottom: 12,
  },
});
