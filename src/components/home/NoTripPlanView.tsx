import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppButton from "../AppButton";
import COLORS from "../../constants/colors";

interface Props {
  onAddNewTripPlan: () => void;
}
export default function NoTripPlanView({ onAddNewTripPlan }: Props) {
  return (
    <View style={styles.contentContainer}>
      <Ionicons name="location-sharp" size={32} color={COLORS.primary} />
      <Text style={styles.contentTitle}>No trips planned yet</Text>
      <Text style={styles.contentSubTitle}>
        Looks like it's time to plan a new{"\n"}travel experience!{"\n"}Get
        Started Below
      </Text>
      <AppButton
        label="Start a new trip"
        isFilled
        containerStyle={styles.contentBtn}
        labelStyle={styles.contentBtnText}
        onPress={onAddNewTripPlan}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    fontFamily: "outfit-medium",
    fontSize: 24,
    color: COLORS.primary,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  contentSubTitle: {
    fontFamily: "outfit-regular",
    fontSize: 20,
    color: COLORS.gray,
    marginBottom: 24,
    textAlign: "center",
  },
  contentBtn: {
    paddingHorizontal: 24,
  },
  contentBtnText: {
    fontSize: 18,
  },
});
