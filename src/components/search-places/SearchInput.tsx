import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import COLORS from "../../constants/colors";
import { ICONS } from "../../constants/icons";
import defaultStyles from "../../constants/styles";

interface Props {
  searchText: string;
  onChangeText: (text: string) => void;
}
export default function SearchInput({ searchText, onChangeText }: Props) {
  return (
    <View style={[styles.searchContainer, defaultStyles.shadowLight]}>
      <AntDesign name="search1" size={22} color={COLORS.gray} />
      <TextInput
        placeholder="Search Interesting Places"
        style={styles.textInput}
        value={searchText}
        onChangeText={onChangeText}
      />
      <Image source={ICONS.filter} style={styles.filterIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    color: COLORS.primary,
    fontFamily: "outfit-regular",
    fontSize: 18,
    flex: 1,
  },
  filterIcon: {
    color: COLORS.gray,
    width: 32,
    height: 32,
  },
});
