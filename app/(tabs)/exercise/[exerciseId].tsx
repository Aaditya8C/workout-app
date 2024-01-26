import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import exerciseData from "../../../constants/exercise_data";

const ExerciseDetail = () => {
  const { exerciseId } = useLocalSearchParams();
  const [exercise, setExercise] = useState<any>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
    secondaryMuscles: [],
    instructions: [],
  });
  const findExercise = (id: any) => {
    exerciseData.forEach((element) => {
      if (element.id === id) {
        setExercise(element);
      }
    });
  };
  useEffect(() => {
    findExercise(exerciseId);
  }, []);

  if (exercise.id === "") {
    return <Text>Loading</Text>;
  }
  return (
    <View className="bg-white flex flex-col flex-1 p-4">
      <Text className="font-bold text-xl capitalize mb-2">{exercise.name}</Text>
      <View className="flex flex-row gap-1">
        <Text className="text-sm bg-orange-200 rounded-md text-orange-800 px-1 capitalize">
          {exercise.bodyPart}
        </Text>
        <Text className="text-sm bg-blue-200 rounded-md text-blue-800 px-1 capitalize">
          {exercise.target}
        </Text>
        <Text className="text-sm bg-lime-200 rounded-md text-lime-800 px-1 capitalize">
          {exercise.equipment}
        </Text>
      </View>
      <View className="w-[100%] h-[50%] self-center">
        <Image
          className="w-full h-full"
          source={require("../../../assets/images/sample.gif")}
        />
      </View>
      <View>
        <Text className="font-bold text-lg">Instructions</Text>
        <View className="">
          {exercise.instructions.map((item: any, idx: any) => {
            return (
              <View key={idx} className="flex flex-row gap-1">
                <Text>{idx + 1}.</Text>
                <Text className="text-sm w-[95%]">{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetail;
