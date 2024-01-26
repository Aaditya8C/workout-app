import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import exerciseData from "../../../constants/exercise_data";
import { icons, getIcon } from "../../../constants/icon_mapping";
import { Link, Stack } from "expo-router";

const data = exerciseData;
const Page = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen
        name="[exerciseId]"
        options={{
          presentation: "modal",
          headerTitle: "Workout Details",
        }}></Stack.Screen>
    </Stack>
  );
};

export default Page;
