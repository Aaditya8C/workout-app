import React, { useState, memo, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import exerciseData from "../../../constants/exercise_data";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import { getIcon } from "../../../constants/icon_mapping";
import { useRouter } from "expo-router";

const Exercise = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(exerciseData);

  useEffect(() => {
    setFilteredData(
      exerciseData.filter((item) => {
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
      <View className="flex flex-row justify-around items-center p-2 relative">
        <Pressable
          onPress={() => {
            router.replace("/");
          }}
        >
          <Icon name="arrow-back" size={30}></Icon>
        </Pressable>
        <TextInput
          autoFocus={true}
          className="px-4 py-2 bg-slate-200 w-[70%] text-lg rounded-lg text-gray-600"
          onChangeText={(text) => {
            setSearchText(text);
          }}
          value={searchText}
        ></TextInput>
        {searchText !== "" && (
          <Pressable
            className="absolute right-10"
            onPress={() => {
              setSearchText("");
            }}
          >
            <Text className=" text-gray-400">
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
              <Link href={`/exercise/${item.id}`}>
                <View className="flex flex-row space-x-3  px-3 py-2">
                  <View className="h-12 w-12">
                    <View className="rounded-full border border-violet-300">
                      <Image
                        className="rounded-full w-full h-full"
                        source={getIcon(item.bodyPart)}
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
                    <Text className=" text-gray-400">{item.bodyPart}</Text>
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
