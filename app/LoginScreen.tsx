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
const LoginScreen: React.FC<LoginNavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-black h-full w-full px-4 py-10">
      <View className="flex gap-2 justify-center items-center mt-20">
        <Image
          source={require("../assets/images/ai.png")}
          className="w-24 h-24"
        />
        <Login navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
