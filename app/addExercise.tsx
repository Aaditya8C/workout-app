import React, { useState, memo, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setNewTemplate } from "../Redux/Actions/actions";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

const AddExercisePage = () => {
  const dispatch = useDispatch();
  const newTemplateState = useSelector((state: any) => {
    return state.newTemplate;
  });
  const [localCopyExercises, setLocalCopyExercises] = useState(
    newTemplateState.exercises
  );
  const router = useRouter();

  const handleSelect = (id: string) => {
    setLocalCopyExercises((state: any) => [...state, id]);
  };
  const handleDeselect = (id: string) => {
    setLocalCopyExercises((state: any) =>
      state.filter((item: any) => item !== id)
    );
  };
  const handleCheckPress = () => {
    dispatch(
      setNewTemplate({ ...newTemplateState, exercises: localCopyExercises })
    );
    router.back();
  };
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(exerciseData);

  useEffect(() => {
    setFilteredData(
      exerciseData.filter((item) => {
        if (searchText === "") {
          return true;
        }
        return (
          item.name.includes(searchText.toLowerCase()) ||
          item.bodyPart.includes(searchText.toLowerCase())
        );
      })
    );
  }, [searchText]);

  return (
    <SafeAreaView className="relative flex-1 bg-cyan-900">
      <View className="flex flex-row justify-around items-center p-2 relative">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Icon name="arrow-back" size={30}></Icon>
        </Pressable>
        <TextInput
          className="px-4 py-2 bg-slate-200 w-[70%] text-lg rounded-lg text-gray-600"
          onChangeText={(text) => {
            setSearchText(text);
          }}
          value={searchText}
          autoFocus
        ></TextInput>
        {searchText !== "" && (
          <Pressable
            className="absolute right-10"
            onPress={() => {
              setSearchText("");
            }}
          >
            <Text className=" text-gray-400">
              <Icon name="close-outline" size={30}></Icon>
            </Text>
          </Pressable>
        )}
      </View>
      <View>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => {
            return (
              <ExerciseCard
                item={item}
                handleDeselect={handleDeselect}
                handleSelect={handleSelect}
                isSelected={localCopyExercises.includes(item.id)}
              ></ExerciseCard>
            );
          }}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <View className="py-2"></View>}
        />
      </View>
      {localCopyExercises.length !== 0 && (
        <View className="absolute bottom-10 right-5">
          <TouchableOpacity
            onPress={() => {
              handleCheckPress();
            }}
          >
            <Icon name="checkmark-circle" color={"#06b6d4"} size={70} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
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
