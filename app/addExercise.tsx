import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import exerciseData from "../constants/exercise_data";
import Icon from "react-native-vector-icons/Ionicons";
import ExerciseCard from "../components/exerciseCard";
import { useRouter, useLocalSearchParams } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  addExerciseToNewTemplate,
  removeExerciseFromNewTemplate,
} from "../Redux/Actions/actions";

const data = exerciseData;

const AddExercisePage = () => {
  const dispatch = useDispatch();
  const templateExercises = useSelector((state: any) => {
    return state.newTemplate.exercises;
  });
  const router = useRouter();

  const handleOnPress = (id: string) => {
    if (templateExercises.includes(id)) {
      dispatch(removeExerciseFromNewTemplate(id));
    } else {
      dispatch(addExerciseToNewTemplate(id));
    }
  };

  const handleCheckPress = async () => {
    router.back();
  };

  return (
    <View className="relative">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ExerciseCard
            item={item}
            handleOnPress={() => {
              handleOnPress(item.id);
            }}
            selectedItems={templateExercises}></ExerciseCard>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <View className="py-2"></View>}
      />
      {templateExercises.length !== 0 && (
        <View className="absolute bottom-6 right-6">
          <TouchableOpacity
            onPress={() => {
              handleCheckPress();
            }}>
            <Icon name="checkmark-circle" color={"#9747ff"} size={70} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});
export default AddExercisePage;
