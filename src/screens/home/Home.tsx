import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import defaultStyles from "../../constants/styles";
import COLORS from "../../constants/colors";
import AppButton from "../../components/AppButton";
import { screenPadding } from "../../constants/sizes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/navigation-types";
export default function Home() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAddTrip = () => {
    navigation.navigate("SearchPlace");
  };
  return (
    <View style={{ ...defaultStyles.screenContainer, paddingTop: top }}>
      {/* Header */}
      <View
        style={{
          ...styles.headerContainer,
          position: "absolute",
          top: top + 8,
          left: screenPadding.horizontal,
          right: screenPadding.horizontal,
          zIndex: 100,
        }}
      >
        <Text style={styles.headerTitle}>My Trips</Text>
        <TouchableOpacity style={styles.headerAddBtn} onPress={handleAddTrip}>
          <Ionicons name="add-circle" size={46} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Content */}
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
          onPress={handleAddTrip}
        />
      </View>
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
    fontFamily: "outfit-bold",
    fontSize: 36,
    color: COLORS.primary,
  },
  headerAddBtn: {
    padding: 4,
  },
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
