import React, { memo, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { icons, getIcon } from "../constants/icon_mapping";
import Icon from "react-native-vector-icons/Ionicons";

const ExerciseCard = memo(
  ({ item, handleSelect, handleDeselect, isSelected }: any) => (
    <View key={item.id}>
      <TouchableOpacity
        onPress={() => {
          isSelected ? handleDeselect(item.id) : handleSelect(item.id);
        }}
      >
        <View className="flex flex-row space-x-3  px-3 py-2">
          <View className="h-12 w-12">
            <View className="rounded-full border border-violet-300">
              {!isSelected ? (
                <Image
                  className="rounded-full w-full h-full"
                  source={getIcon(item.bodyPart)}
                />
              ) : (
                <View className="p-2">
                  <Icon name="checkmark" size={30} />
                </View>
              )}
            </View>
          </View>
          <View className="flex justify-center">
            <Text className="text-white">
              {item.name} ({item.equipment})
            </Text>
            <Text className=" text-white">{item.bodyPart}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  ),
  (prevProps, nextProps) => {
    return prevProps.isSelected === nextProps.isSelected;
  }
);
export default ExerciseCard;
