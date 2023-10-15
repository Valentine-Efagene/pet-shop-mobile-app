import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import Hero from "./components/Hero";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Color from "./colors";
import Companion from "./components/Companion";
import Discovery from "./components/Discovery";
import Family from "./components/Family";
import Links from "./components/Links";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Alternate the positions of the safeareaview and the scrollview
  // to see notched views

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <ScrollView>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <Hero />
            <Companion />
            <Discovery />
            <Family />
            <Links />
            <Testimonials />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    flex: 1,
    backgroundColor: Color.bgLight,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    borderWidth: 8,
    borderColor: "#fff",
    overflow: "hidden",
  },
});
