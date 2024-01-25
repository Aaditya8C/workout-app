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

const TemplatesHomePage = () => {
  const router = useRouter();
  const templates = useSelector((state: any) => {
    return state.templates;
  });
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 flex flex-col gap-2 bg-white">
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

        <FlatList
          data={templates}
          renderItem={(template: any) => {
            return <TemplateCard template={template.item} />;
          }}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="p-1"></View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default TemplatesHomePage;
