import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import ImageSlider from "../../components/imageSlider";
import { Link, useRouter } from "expo-router";

const navigationItems = [
  {
    title: "Workout Plan",
    image: require("../../assets/images/training.png"),
    route: "/templates",
  },
  {
    title: "Exercise Library",
    image: require("../../assets/images/bookshelf.png"),
    route: "/exercise/",
  },
  {
    title: "Ayurveda",
    image: require("../../assets/images/ayurveda.png"),
    route: "/ayurveda/",
  },
  {
    title: "Get AI Insights",
    image: require("../../assets/images/ai.png"),
    route: "/airecommendations",
  },
];

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-violet-200 flex space-y-3" edges={["top"]}>
      <View className="pt-2 flex flex-row justify-center gap-2 items-center">
        <Text className="tracking-wider text-violet-950 text-2xl font-bold">
          Ready To
        </Text>
        <View className="flex flex-row items-center rounded-lg p-1">
          <Image
            className="w-10 h-10"
            source={require("../../assets/images/stretchlogo.png")}
          />
          <Text className="font-bold tracking-wider text-orange-400 text-2xl">
            Stretch
          </Text>
        </View>
      </View>

      <View>
        <ImageSlider />
      </View>

      <View className="flex flex-row flex-wrap justify-center px-5 gap-6">
        {navigationItems.map((item, index) => (
          <Pressable
            key={index}
            className="w-[40%] bg-violet-950 rounded-xl flex items-center p-3"
            style={{ elevation: 5 }}
            onPress={() => {
              router.replace(item.route);
            }}
          >
            <Image className="w-20 h-20 rounded-full" source={item.image} />
            <Text className="text-sm font-bold p-1 text-white">{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Index;
