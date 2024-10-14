import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

const tabs = [
  {
    name: "index",
    title: "Home",
    icon: "home-outline",
  },
  {
    name: "templates",
    title: "Templates",
    icon: "bookmarks-outline",
  },
  {
    name: "profile",
    title: "Profile",
    icon: "person-outline",
  },
  {
    name: "exercise",
    title: "Exercise",
    icon: "barbell-outline",
  },
  {
    name: "aichat",
    title: "AI",
    icon: "logo-apple-ar",
  },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#0891b2",
          paddingVertical: 10,
          height: 60,
        },
        tabBarActiveTintColor: "#fff3b0", // Active tab icon color
        tabBarInactiveTintColor: "#000000", // Inactive tab icon color
        tabBarAllowFontScaling: true,
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Text
                className={
                  focused ? "text-orange-300 font-semibold" : "text-black"
                }
              >
                <Icon name={tab.icon} size={30} color={color} />
              </Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
