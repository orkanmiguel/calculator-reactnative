import { View, Text } from "react-native";

import { isLoaded, useFonts } from "expo-font";

import React from "react";
import { Slot } from "expo-router";
import { globalStyles } from "@/styles/global-styles";

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
