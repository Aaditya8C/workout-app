import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AiChatComp from "@/components/AiChatComp";

const AiChat = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <AiChatComp />
    </View>
  );
};

export default AiChat;
