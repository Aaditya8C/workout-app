import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import exerciseData from "../../../constants/exercise_data";
import { icons, getIcon } from "../../../constants/icon_mapping";
import { Link } from "expo-router";

const data = exerciseData;
const Exercise = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
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
                      {item.name} ({item.equipment})
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
    </View>
  );
};

export default Exercise;
