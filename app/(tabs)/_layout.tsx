import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
const TabsLayout = () => {
  const router = useRouter();
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, focused }) => {
            return (
              <Text className={focused ? "text-violet-600" : "text-gray-500"}>
                <Icon name="person-outline" size={30}></Icon>
              </Text>
            );
          },
        }}></Tabs.Screen>
      <Tabs.Screen
        name="index"
        options={{
          title: "Templates",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <Text className={focused ? "text-violet-600" : "text-gray-500"}>
                <Icon name="bookmarks-outline" size={30}></Icon>
              </Text>
            );
          },
        }}></Tabs.Screen>
      <Tabs.Screen
        options={{
          title: "Exercise",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Text className={focused ? "text-violet-600" : "text-gray-500"}>
                <Icon name="barbell-outline" size={30}></Icon>
              </Text>
            );
          },
        }}
        name="exercise"></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
