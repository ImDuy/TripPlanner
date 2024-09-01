import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import defaultStyles from "../constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import COLORS from "../constants/colors";
import Divider from "../components/Divider";
import AppButton from "../components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../utils/navigation-types";
import { auth } from "../utils/firebase-config";

export default function Profile() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const signOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("AuthStack", { screen: "SignIn" });
    });
  };

  return (
    <View
      style={{
        ...defaultStyles.screenContainer,
        paddingTop: top + 20,
        alignItems: "center",
      }}
    >
      <View style={styles.avatarContainer}>
        <AntDesign name="user" size={46} color={COLORS.primary} />
      </View>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>

      <Divider style={styles.divider} />

      <AppButton
        label="Sign Out"
        containerStyle={styles.signOutBtn}
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 4,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
    color: COLORS.primary,
    fontFamily: "outfit-medium",
    fontSize: 18,
    marginVertical: 4,
    textAlign: "center",
  },
  divider: {
    alignSelf: "stretch",
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: COLORS.primary,
    height: 1,
  },
  signOutBtn: {
    paddingHorizontal: 30,
  },
});
