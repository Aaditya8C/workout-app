import React from "react";
import { Text, TextInput, View } from "react-native";

const AiChatComp = () => {
  return (
    <View className="bg-cyan-900 h-screen w-screen relative">
      <View className="absolute bottom-28 h-14 w-full my-2">
        <TextInput className="rounded-2xl h-full w-full bg-cyan-700 text-white px-2" />
      </View>
    </View>
  );
};

export default AiChatComp;
