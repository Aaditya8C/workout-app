import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AiRecommendations from "@/components/AiRecommendations";

const AiChat = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <AiRecommendations />
    </View>
  );
};

export default AiChat;
