import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";

import TemplateHomePage from "../../components/TemplatesHomePage";

const Index = () => {
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

export default Index;
