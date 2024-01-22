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
import { useSelector, useDispatch } from "react-redux";
import { renameNewTemplate } from "../Redux/Actions/actions";

const CreateTemplate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const templateName = useSelector((state: any) => {
    return state.newTemplate.templateName;
  });
  const templateExercises = useSelector((state: any) => {
    return state.newTemplate.exercises;
  });

  return (
    <View className="flex-1 flex bg-white">
      <View className=" relative">
        <TextInput
          className="p-2 border-2 border-violet-400 my-1 text-lg font-semibold"
          onChangeText={(text) => {
            dispatch(renameNewTemplate(text));
          }}
          value={templateName}
          autoFocus
        />
        <Image
          className="w-5 h-5 mr-2 absolute right-2 top-4"
          source={require("../assets/images/threedots.png")}
        />
      </View>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/addExercise",
            params: { templateName },
          });
        }}>
        <Text className=" text-blue-400 text-lg font-semibold self-center pt-3">
          ADD EXERCISE
        </Text>
      </Pressable>
      {templateExercises.map((itemid: any) => {
        return <Text key={itemid}>{itemid}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateTemplate;
