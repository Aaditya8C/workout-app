import { View, Text, TextInput, Image, SafeAreaView } from "react-native";
import React from "react";
import Login from "./Login";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type LoginNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};
const Index: React.FC<LoginNavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="h-full bg-violet-100 w-full px-4 py-10">
      <View className="flex gap-2 justify-center items-center mt-20">
        <Image
          source={require("../assets/images/logo.png")}
          className="w-40 h-40"
        />
        <Login navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Index;
