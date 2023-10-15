import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import Font from "../fonts";
import Color from "../colors";
import Constant from "../constants";

const image = require("../assets/img/discovery.png");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Discovery() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discover Our Top Products</Text>
      <Text style={styles.paragraph}>
        We offer a wide range of high quality pet products and accessories to
        keep your furry friends happy and healthy. Ranging from premium pet food
        to stylish collars and toys, we have everything you need.
      </Text>
      <Text style={styles.heading}>Shop with Confidence</Text>
      <Text style={styles.paragraph}>
        At our pet shop, we prioritize quality and safety. Our products are
        carefully selected from trusted brands to ensure the well-being of your
        pets. You can shop with confidence knowing that you are getting the best
        for your furry companions.
      </Text>
      <Text style={styles.heading}>Expert Advice Available</Text>
      <Text style={styles.paragraph}>
        Need guidance on choosing the right products for your pets? Our
        knowledgeable staffs are here to help, be it questions about pet
        nutrition or recommendations fo grooming supplies, we are ready to
        provide expert advice.
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
    padding: Constant.padding as number,
  },
  image: {
    flex: 1,
    width: "100%",
    aspectRatio: 380 / 475,
    borderRadius: 40,
  },
  heading: {
    fontFamily: Font.nunitoBold700,
    fontSize: 16,
    color: Color.textDark,
    alignItems: "flex-start",
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: Font.nunitoRegular400,
    color: Color.textDark,
    fontSize: 12,
    marginBottom: 16,
  },
});
