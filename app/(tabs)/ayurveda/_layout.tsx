import React, { useState } from "react";
import exerciseData from "../../../constants/exercise_data";
import { Link, Stack } from "expo-router";

const data = exerciseData;
const Page = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="[ayurId]"
        options={{
          presentation: "modal",
          headerTitle: "Workout Details",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default Page;
