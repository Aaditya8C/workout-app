import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import exerciseData from "../constants/exercise_data";

const data = exerciseData;

const ListItem = ({ item, selected, onPress, onLongPress }: any) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.listItem}>
      <View className="flex flex-row items-center gap-2">
        <View className="rounded-full  w-12 h-12 border border-violet-300">
          <Image className="rounded-full w-full h-full " source={item.icon} />
        </View>
        <View>
          <Text>
            {item.name} ({item.equipment})
          </Text>
          <Text className=" text-gray-400">{item.bodypart}</Text>
        </View>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);

const App = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleOnPress = (contact: any) => {
    if (selectedItems.length) {
      return selectItems(contact);
    }

    // here you can add you code what do you want if user just do single tap
    console.log("pressed");
  };

  const getSelected = (contact: any) => selectedItems.includes(contact.id);

  const deSelectItems = () => setSelectedItems([]);

  const selectItems = (item: any) => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        (listItem) => listItem !== item.id
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  return (
    <Pressable onPress={deSelectItems}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => handleOnPress(item)}
            onLongPress={() => selectItems(item)}
            selected={getSelected(item)}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="p-1"></View>}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  listItem: {
    // backgroundColor: "#252628",
    // marginBottom: 10,
    // borderRadius: 5,
    // overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(160,20,130,0.2)",
  },
});

export default App;
