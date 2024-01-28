import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import TemplateCard from "./templateCard";
import { useSelector } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";

const TemplatesHomePage = () => {
  const router = useRouter();
  const templates = useSelector((state: any) => {
    return state.templates;
  });
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 flex flex-col gap-2">
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
        <MenuProvider>
          <FlatList
            data={templates}
            renderItem={({ item }) => {
              return <TemplateCard template={item} />;
            }}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View className="p-1"></View>}
          />
        </MenuProvider>
      </View>
    </SafeAreaView>
  );
};

export default TemplatesHomePage;
