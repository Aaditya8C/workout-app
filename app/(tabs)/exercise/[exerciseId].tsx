import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import exerciseData from "../../../constants/exercise_data"; // Local data file
import { API_KEY } from "../../../config"; // Ensure your API Key is stored securely

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
  const [loading, setLoading] = useState(true);

  // Function to fetch exercise data from RapidAPI
  const fetchExerciseData = async (id: string) => {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "03d17c3357msh037aab352356d10p117a31jsncb72c4454aaa",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setExercise(data);
      } else {
        // Fallback to local data if the API call fails
        findExerciseLocally(id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      findExerciseLocally(id);
    } finally {
      setLoading(false);
    }
  };

  // Function to find exercise in local data
  const findExerciseLocally = (id: string) => {
    const localExercise = exerciseData.find((element) => element.id === id);
    if (localExercise) {
      setExercise(localExercise);
    }
  };

  useEffect(() => {
    fetchExerciseData(exerciseId);
  }, [exerciseId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
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
          source={{
            uri:
              exercise.gifUrl || require("../../../assets/images/sample.gif"),
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text className="font-bold text-lg">Instructions</Text>
        <View className="">
          {exercise.instructions.map((item: any, idx: any) => (
            <View key={idx} className="flex flex-row gap-1">
              <Text>{idx + 1}.</Text>
              <Text className="text-sm w-[95%]">{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetail;
