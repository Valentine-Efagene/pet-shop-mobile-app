import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import Font from "../../fonts";
import Color from "../../colors";

export default function Shop() {
  const image = require("../../assets/img/shop.jpeg");

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.shade}>
          <View style={styles.texts}>
            <Text style={styles.heading}>Shop for Pet Supplies</Text>
            <Text style={styles.paragraph}>
              Choose from a variety of adorable and healthy pets.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 184 / 232,
    width: 184,
    borderRadius: 40,
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  shade: {
    padding: 20,
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: Color.shade,
  },
  texts: {
    alignItems: "center",
    paddingBottom: 20,
  },
  heading: {
    color: Color.textLight,
    textAlign: "center",
    fontSize: 16,
    fontFamily: Font.nunitoBold700,
  },
  paragraph: {
    color: Color.textLight,
    textAlign: "center",
    fontSize: 10,
  },
});
