import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import defaultStyles from "../constants/styles";
import IMAGES from "../constants/images";
import COLORS from "../constants/colors";
import { screenSize } from "../constants/sizes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../utils/navTypeCheck";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LandingPage() {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { bottom } = useSafeAreaInsets();

  const onGetStartedPress = () => navigation.navigate("SignIn");

  return (
    <View style={defaultStyles.container}>
      <Image source={IMAGES.landing} style={styles.image} resizeMode="cover" />
      <View style={[styles.contentContainer, { paddingBottom: bottom }]}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.normalText}>
          Discover your next adventure effortlessly.{"\n"}Personalized
          itineraries at your fingertips.{"\n"}Travel smarter with AI-driven
          insights.
        </Text>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={onGetStartedPress}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: screenSize.width < 380 ? "60%" : "62%",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    padding: 28,
    alignItems: "center",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 28,
  },
  normalText: {
    color: COLORS.gray,
    fontFamily: "outfit-regular",
    textAlign: "center",
    fontSize: 16,
    marginTop: screenSize.width < 380 ? 16 : 20,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    alignSelf: "stretch",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: "auto",
  },
  btnText: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    color: COLORS.white,
  },
});
