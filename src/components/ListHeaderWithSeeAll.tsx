import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";

interface Props {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  seeAllStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onSeeAllPress?: () => void;
}
export default function ListHeaderWithSeeAll({
  title,
  titleStyle,
  seeAllStyle,
  containerStyle,
  onSeeAllPress,
}: Props) {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
      <TouchableOpacity onPress={onSeeAllPress}>
        <Text style={[styles.headerSubTitle, seeAllStyle]}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 24,
  },
  headerSubTitle: {
    color: "#46acdf",
    fontFamily: "outfit-medium",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
