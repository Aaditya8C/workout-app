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

const AddExercisePage = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleOnPress = (id: any) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemid) => itemid !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <View className="">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ExerciseCard
            item={item}
            handleOnPress={handleOnPress}
            selectedItems={selectedItems}></ExerciseCard>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="p-2"></View>}
        ListHeaderComponent={() => <View className="py-2"></View>}
      />
    </View>
  );
};

const ExerciseCard = ({ item, handleOnPress, selectedItems }: any) => (
  <TouchableOpacity
    onPress={() => {
      handleOnPress(item.id);
    }}>
    <View
      className="flex flex-row items-center gap-3 pl-2"
      style={selectedItems.includes(item.id) ? styles.background : styles.none}>
      <View className="rounded-full  w-12 h-12 border border-violet-300">
        <Image className="rounded-full w-full h-full" source={item.icon} />
      </View>
      <View>
        <Text>
          {item.name} ({item.equipment})
        </Text>
        <Text className=" text-gray-400">{item.bodypart}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: "red",
  },
  none: {},
});
export default AddExercisePage;
