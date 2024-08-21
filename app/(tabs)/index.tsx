import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../../components/imageSlider";
import { Link, useRouter } from "expo-router";
// import ImageSlider from '../components/ImageSlider';
// import BodyParts from '../components/BodyParts';

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-cyan-900 flex space-y-3" edges={["top"]}>
      <View className="pt-2 flex flex-row  justify-center gap-2 items-center">
        <Text className="tracking-wider text-cyan-300 text-2xl font-bold">
          Ready To
        </Text>
        <View
          className="flex flex-row items-center rounded-lg p-1"
          // style={{ elevation: 5 }}
        >
          <Image
            className="w-10 h-10"
            source={require("../../assets/images/stretchlogo.png")}
          ></Image>
          <Text className="font-bold tracking-wider text-orange-200 text-2xl">
            Stretch
          </Text>
        </View>
      </View>
      <View>
        <ImageSlider />
      </View>
      <View className="flex flex-row flex-wrap justify-center  px-5 gap-6">
        <Pressable
          className="w-[40%] bg-orange-200 rounded-xl flex items-center p-3"
          style={{ elevation: 5 }}
          onPress={() => {
            router.replace("/profile");
          }}
        >
          <Image
            className="w-20 h-20"
            source={require("../../assets/images/profile.png")}
          ></Image>
          <Text className="text-sm font-bold p-1">Profile</Text>
        </Pressable>

        <Pressable
          className="w-[40%] bg-orange-200 rounded-xl flex items-center p-3"
          onPress={() => {
            router.replace("/profile");
          }}
          style={{ elevation: 5 }}
        >
          <Image
            className="w-20 h-20"
            source={require("../../assets/images/ai.png")}
          ></Image>
          <Text className="text-sm font-bold p-1">Chat with AI</Text>
        </Pressable>
        <Pressable
          className="w-[40%] bg-orange-200 rounded-xl flex items-center p-3"
          style={{ elevation: 5 }}
          onPress={() => {
            router.replace("/templates");
          }}
        >
          <Image
            className="w-20 h-20"
            source={require("../../assets/images/training.png")}
          ></Image>
          <Text className="text-sm font-bold p-1">Workout Plan</Text>
        </Pressable>
        <Pressable
          className="w-[40%] bg-orange-200 rounded-xl flex items-center p-3"
          style={{ elevation: 5 }}
          onPress={() => {
            router.replace("/exercise/");
          }}
        >
          <Image
            className="w-20 h-20"
            source={require("../../assets/images/bookshelf.png")}
          ></Image>
          <Text className="text-sm font-bold p-1">Exercise Library</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Index;
