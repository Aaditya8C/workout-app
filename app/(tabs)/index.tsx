import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 flex flex-col gap-2 bg-white">
        <View className="pt-2 flex flex-row justify-center">
          <Image
            className="w-7 h-7 mr-2"
            source={require("../../assets/images/dumbbell.png")}
          />
          <Text className="text-2xl text-violet-600 font-bold">कसरत</Text>
        </View>
        <View className="w-[90%] self-center">
          <Button
            onPress={() => {
              router.push("/createTemplate");
            }}
            title="Add Template +"
            color={"#9747ff"}></Button>
        </View>
        <View>
          <Text className="pl-4 tracking-widest text-gray-400">
            MY TEMPLATES
          </Text>
        </View>
        <View className="border self-center w-[95%] border-gray-300 p-2 rounded-md">
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-semibold">
              Shoulders - Variation 1
            </Text>
            <Image
              className="w-5 h-5 mr-2"
              source={require("../../assets/images/threedots.png")}></Image>
          </View>
          <View className="">
            <Text className="text-gray-500 ">{"2x Plank (Core)"}</Text>
            <Text className="text-gray-500 ">{"2x Situps (Core)"}</Text>
            <Text className="text-gray-500 ">
              {"3x Overhead Press (Dumbbell)"}
            </Text>
            <Text className="text-gray-500 ">
              {"2x Lateral Raise (Cardio)"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
