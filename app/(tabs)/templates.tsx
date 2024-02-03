import { View, Text, StatusBar } from "react-native";
import React from "react";
import TemplateHomePage from "../../components/TemplatesHomePage";
const Templates = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <TemplateHomePage />
    </>
  );
};

export default Templates;
