import { StyleSheet, View, Text } from "react-native";
import Constant from "../constants";
import Font from "../fonts";
import Color from "../colors";

export default function Testimonials() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Happy Customers</Text>
      <Text style={styles.paragraph}>
        Read what our customers have to say about us.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constant.padding as number,
  },
  heading: {
    fontFamily: Font.nunitoBold700,
    fontSize: 36,
    color: Color.textDark,
    alignItems: "flex-start",
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: Font.nunitoRegular400,
    color: Color.textDark,
    fontSize: 12,
    marginBottom: 10,
  },
});
