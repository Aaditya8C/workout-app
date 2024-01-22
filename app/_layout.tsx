import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../Redux/Store/store";
const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen
          name="createTemplate"
          options={{ headerTitle: "Create New Template" }}></Stack.Screen>
        <Stack.Screen
          name="addExercise"
          options={{ headerTitle: "Add Exercises" }}></Stack.Screen>
      </Stack>
    </Provider>
  );
};

export default RootLayout;
