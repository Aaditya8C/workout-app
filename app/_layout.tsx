import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "../Redux/Store/store";
import { Stack } from "expo-router";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";
const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="createTemplate"
            options={{
              headerTitle: "Create New Template",
            }}></Stack.Screen>
          <Stack.Screen
            name="addExercise"
            options={{ headerTitle: "Add Exercises" }}></Stack.Screen>
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
