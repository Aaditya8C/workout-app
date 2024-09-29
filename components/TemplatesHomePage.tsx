import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
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
    <SafeAreaView className="flex-1 px-1 bg-cyan-900 ">
      <View className="flex-1 flex flex-col gap-2">
        <View className="pt-2 flex flex-row  justify-center  items-center">
          <View className="flex flex-row items-center rounded-lg  p-1">
            <Image
              className="w-10 h-10"
              source={require("../assets/images/stretchlogo.png")}
            ></Image>
            <Text className="font-bold tracking-wider text-white text-2xl">
              STRETCH
            </Text>
          </View>
        </View>
        <View className="w-[90%] self-center">
          <Pressable
            className="rounded-lg bg-cyan-200 p-3 items-center flex flex-row justify-center"
            style={{ elevation: 5 }}
            onPress={() => {
              router.push("/createTemplate");
            }}
          >
            <Text className="text-cyan-800  font-bold text-sm">
              ADD TEMPLATE{" "}
            </Text>

            <Icon name="add" size={23}></Icon>
          </Pressable>
        </View>
        <View>
          <Text className="pl-4 tracking-widest text-white">MY TEMPLATES</Text>
        </View>
        <MenuProvider>
          <FlatList
            data={templates}
            renderItem={({ item }) => {
              return <TemplateCard template={item} />;
            }}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View className="m-2"></View>}
          />
        </MenuProvider>
      </View>
    </SafeAreaView>
  );
};

export default TemplatesHomePage;
