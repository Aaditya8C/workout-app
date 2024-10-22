import React, { useState, useEffect } from "react";
import { FlatList, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import { getIcon } from "../../../constants/icon_mapping";
import { useRouter } from "expo-router";
import { ayurvedaExerciseData } from "@/constants/ayurveda_execise_data";

const Exercise = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(ayurvedaExerciseData);

  useEffect(() => {
    setFilteredData(
      ayurvedaExerciseData.filter((item) => {
        if (searchText === "") {
          return true;
        }
        return (
          item.name.includes(searchText.toLowerCase()) ||
          item.bodyPart.includes(searchText.toLowerCase())
        );
      })
    );
  }, [searchText]);
  return (
    <SafeAreaView className="bg-cyan-800">
      <View className="flex flex-row justify-between items-center p-2 relative">
        <Pressable
          onPress={() => {
            router.replace("/");
          }}
        >
          <Text className="text-cyan-300">
            <Icon name="arrow-back" size={30}></Icon>
          </Text>
        </Pressable>
        <TextInput
          autoFocus={true}
          placeholder="Search exercise..."
          className="px-4 py-2 bg-slate-200 w-[85%] text-lg rounded-lg text-gray-600 placeholder:text-sm"
          onChangeText={(text) => {
            setSearchText(text);
          }}
          value={searchText}
        ></TextInput>
        {searchText !== "" && (
          <Pressable
            className="absolute right-6"
            onPress={() => {
              setSearchText("");
            }}
          >
            <Text>
              <Icon name="close-outline" size={30}></Icon>
            </Text>
          </Pressable>
        )}
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => {
          return (
            <View className="bg-cyan-900">
              <Link href={`/ayurveda/${item.id}`}>
                <View className="flex flex-row space-x-3  px-3 py-2">
                  <View className="h-12 w-12">
                    <View className="rounded-full border border-violet-300">
                      <Image
                        className="rounded-full w-full h-full"
                        source={getIcon(item?.part)}
                      />
                    </View>
                  </View>
                  <View className="flex justify-center">
                    <Text>
                      <Text className=" font-semibold capitalize text-white">
                        {item.name}
                      </Text>
                      <Text className="text-white">({item.equipment})</Text>
                    </Text>
                    <Text className=" text-white">{item.bodyPart}</Text>
                  </View>
                </View>
              </Link>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <View className="py-2"></View>}
      />
    </SafeAreaView>
  );
};

export default Exercise;
