import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import exerciseData from "../constants/exercise_data";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  Menu,
  MenuProvider,
  MenuTrigger,
  MenuOption,
  MenuOptions,
} from "react-native-popup-menu";
import { useDispatch } from "react-redux";
import { removeTemplate, setNewTemplate } from "../Redux/Actions/actions";
import { useRouter } from "expo-router";
const data = exerciseData;

const TemplateCard = ({ template }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const getExercise = (id: string) => {
    const exercise_array = data.filter((exercise: any) => {
      return exercise.id === id;
    });
    return exercise_array[0];
  };
  return (
    <View className="border self-center w-[95%] border-gray-300 p-3 rounded-md">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-lg font-semibold text-white">
          {template.templateName}
        </Text>
        <Menu>
          <MenuTrigger>
            <Icon name="ellipsis-vertical" size={20} color="white" />
          </MenuTrigger>
          <MenuOptions>
            <View className="bg-cyan-700 p-2 rounded-xl">
              <MenuOption
                onSelect={() => {
                  dispatch(setNewTemplate(template));
                  router.push("/createTemplate");
                }}
              >
                <Text className="p-2 text-white">Edit</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {
                  dispatch(setNewTemplate(template));
                  router.push("/createTemplate");
                }}
              >
                <Text className="p-2 text-white">Rename</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {
                  dispatch(removeTemplate(template.id));
                }}
              >
                <Text className="p-2 text-white">Delete</Text>
              </MenuOption>
            </View>
          </MenuOptions>
        </Menu>
      </View>
      <View>
        <View className="mt-2">
          <FlatList
            data={template.exercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const ex = getExercise(item);
              return (
                ex && (
                  <Text className="text-white ">{`1 x ${ex.name} (${ex.bodyPart})`}</Text>
                )
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TemplateCard;
