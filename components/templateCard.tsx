import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import exerciseData from "../constants/exercise_data";
import { FlatList } from "react-native";

const data = exerciseData;

const TemplateCard = ({ template }: any) => {
  const getExercise = (id: string) => {
    const exercise_array = data.filter((exercise: any) => {
      return exercise.id === id;
    });
    return exercise_array[0];
  };
  return (
    <View className="border self-center w-[95%] border-gray-300 p-2 rounded-md">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-lg font-semibold">{template.templateName}</Text>
        <Icon name="ellipsis-vertical" size={20} />
      </View>
      <View>
        <FlatList
          data={template.exercises}
          renderItem={({ item }: any) => {
            const ex = getExercise(item);
            return (
              ex && (
                <Text className="text-gray-500 ">{`3 X ${ex.name} (${ex.equipment}) - ${ex.bodyPart}`}</Text>
              )
            );
          }}
        />
      </View>
    </View>
  );
};

export default TemplateCard;
