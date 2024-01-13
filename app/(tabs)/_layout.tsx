import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }}></Tabs.Screen>
      <Tabs.Screen name="profile"></Tabs.Screen>
      <Tabs.Screen name="exercise"></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
