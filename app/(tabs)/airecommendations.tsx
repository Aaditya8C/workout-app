import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AiComp from "@/components/AiComp";

const AiRecommendations = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <AiComp />
    </View>
  );
};

export default AiRecommendations;
