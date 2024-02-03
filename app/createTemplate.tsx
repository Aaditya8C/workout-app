import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addTemplate,
  editTemplate,
  renameNewTemplate,
  resetNewTemplate,
} from "../Redux/Actions/actions";
import exerciseData from "../constants/exercise_data";
import Icon from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";
const data = exerciseData;

const CreateTemplate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const getExercise = (id: string) => {
    const exercise_array = data.filter((exercise: any) => {
      return exercise.id === id;
    });
    return exercise_array[0];
  };
  const newTemplate = useSelector((state: any) => {
    return state.newTemplate;
  });

  return (
    <View className="flex-1 flex bg-white">
      <View className="relative">
        <TextInput
          className="p-2 border-2 border-violet-400  my-1 text-lg font-semibold"
          onChangeText={(text) => {
            dispatch(renameNewTemplate(text));
          }}
          value={newTemplate.templateName}
          autoFocus
        />
        <View className="absolute  right-3 top-[18%]">
          <TouchableOpacity
            onPress={() => {
              if (newTemplate.id === "") {
                dispatch(addTemplate({ ...newTemplate, id: uuid.v4() }));
              } else {
                dispatch(editTemplate({ ...newTemplate }));
              }
              dispatch(resetNewTemplate());
              router.back();
            }}
            className="bg-[#9747ff] rounded-lg flex flex-row items-center p-1">
            <Text className="text-white">
              <Icon name="save-outline" size={25} />
            </Text>
            <Text className=" text-lg px-1 font-semibold text-white">Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/addExercise",
          });
        }}>
        <Text className=" text-blue-400 text-lg font-semibold self-center pt-3">
          ADD EXERCISE
        </Text>
      </Pressable>
      <View className="p-3">
        <FlatList
          data={newTemplate.exercises}
          renderItem={({ item }: any) => {
            const ex = getExercise(item);
            return (
              <Text className="text-gray-500 ">{`3 X ${ex.name} (${ex.equipment}) - ${ex.bodyPart}`}</Text>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateTemplate;
