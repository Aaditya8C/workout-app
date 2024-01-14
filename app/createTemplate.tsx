import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
// import { ExerciseCard } from "./addExercise";
import exerciseData from "../constants/exercise_data";
const CreateTemplate = () => {
  const router = useRouter();
  const [text, onChangeText] = useState("New Template");
  const [exercises, onChangeExercises] = useState(["1", "2", "3", "4"]);

  return (
    <View className="flex-1 flex bg-white">
      <View className=" relative">
        <TextInput
          className="p-2 border-2 border-violet-400 my-1 text-lg font-semibold"
          onChangeText={onChangeText}
          value={text}
          autoFocus
        />
        <Image
          className="w-5 h-5 mr-2 absolute right-2 top-4"
          source={require("../assets/images/threedots.png")}
        />
      </View>
      <Pressable
        onPress={() => {
          router.push("/addExercise");
        }}>
        <Text className=" text-blue-400 text-lg font-semibold self-center pt-3">
          ADD EXERCISE
        </Text>
      </Pressable>
      {/* <FlatList
        data={exerciseData.filter((element) => exercises.includes(element.id))}
        renderItem={({ item }) => {
          return <ExerciseCard item={item}></ExerciseCard>;
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="p-1"></View>}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateTemplate;
