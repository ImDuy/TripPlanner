import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { Option } from "../../constants/options";
import COLORS from "../../constants/colors";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  option: Option;
}
export default function ReviewTripOption({ option, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.icon}>{option.icon}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {option.title}
        </Text>
        <Text style={styles.desc} numberOfLines={1}>
          {option.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  icon: {
    fontSize: 36,
  },
  titleContainer: {
    flex: 1,
    rowGap: 1,
  },
  title: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: COLORS.gray,
  },
  desc: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    color: COLORS.primary,
  },
});
