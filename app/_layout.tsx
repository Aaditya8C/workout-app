import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "../Redux/Store/store";
import { Stack } from "expo-router";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";

const RootLayout = () => {
  const isLoggedIn = false;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
        <Stack>
          <Stack.Screen name="Index" options={{ headerShown: false }} />
          <Stack.Screen
            name="RegisterScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* Hide header */}
          <Stack.Screen
            name="createTemplate"
            options={{ headerTitle: "Create Template" }}
          />
          <Stack.Screen
            name="addExercise"
            options={{ headerTitle: "Add Exercises", headerShown: false }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
