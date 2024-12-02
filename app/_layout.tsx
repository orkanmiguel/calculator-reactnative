import { View, Text, Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { isLoaded, useFonts } from "expo-font";

import React from "react";
import { Slot } from "expo-router";
import { globalStyles } from "@/styles/global-styles";

//Modificacion si se encuentra en android. para poner la barra inferior en black
const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
    </View>
  );
};

export default RootLayout;
