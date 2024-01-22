import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const ExerciseCard = ({ item, handleOnPress, selectedItems }: any) => (
  <TouchableOpacity
    onPress={() => {
      handleOnPress(item.id);
    }}>
    <View className="flex flex-row space-x-3  px-3 py-2">
      <View className="h-12 w-12">
        <View className="rounded-full border border-violet-300">
          {!selectedItems.includes(item.id) ? (
            <Image className="rounded-full w-full h-full" source={item.icon} />
          ) : (
            <View className="p-2">
              <Icon name="checkmark" size={30} />
            </View>
          )}
        </View>
      </View>
      <View className="flex justify-center">
        <Text>
          {item.name} ({item.equipment})
        </Text>
        <Text className=" text-gray-400">{item.bodypart}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
export default ExerciseCard;
