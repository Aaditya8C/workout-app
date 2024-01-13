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
import Icon from "react-native-vector-icons/Ionicons";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 flex flex-col gap-2 bg-white">
        <View className="flex flex-row justify-center items-center gap-1">
          <Text className="">
            <Icon name="barbell" size={30} />
          </Text>

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
            <Text className="">
              <Icon name="ellipsis-vertical" size={20} />
            </Text>
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
