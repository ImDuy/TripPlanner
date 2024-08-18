import { NavigationProp, useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-root-toast";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppButton from "../../components/AppButton";
import AuthTextInput from "../../components/AuthTextInput";
import COLORS from "../../constants/colors";
import defaultStyles from "../../constants/styles";
import { auth } from "../../utils/firebase-config";
import {
  AuthStackParamList,
  RootStackParamList,
} from "../../utils/navigation-types";

let toast: any;
export default function SignIn() {
  const { top, bottom } = useSafeAreaInsets();
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailTextChanged = (text: string) => {
    setSignInInfo((prevState) => {
      return { ...prevState, email: text };
    });
  };
  const handlePasswordTextChanged = (text: string) => {
    setSignInInfo((prevState) => {
      return { ...prevState, password: text };
    });
  };
  const handleSignUpNavigation = () => {
    navigation.navigate("SignUp");
  };
  const handleSignIn = () => {
    // check info empty?
    if (!signInInfo.email || !signInInfo.password) {
      if (toast) Toast.hide(toast);
      toast = Toast.show("Please enter all fields");
      return;
    }
    //sign in
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, signInInfo.email, signInInfo.password)
      .then((userCredential) => {
        // Signed in
        rootNavigation.navigate("TabNavigation", {
          screen: "HomeStackNavigation",
        });
      })
      .catch((error) => {
        const errorMessage = error.message.slice(10);
        if (toast) Toast.hide(toast);
        toast = Toast.show(errorMessage);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        ...defaultStyles.screenContainer,
        paddingTop: top,
        paddingBottom: bottom,
      }}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={defaultStyles.headerTitle}>Let's Sign You In</Text>
          <Text style={[styles.lightTile, { marginTop: 24 }]}>
            Welcome back
          </Text>
          <Text style={styles.lightTile}>You've been missed!</Text>
        </View>

        <View style={defaultStyles.container}>
          <AuthTextInput
            title="Email"
            value={signInInfo.email}
            onChangeText={handleEmailTextChanged}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AuthTextInput
            title="Password"
            isPassword
            containerStyle={{ marginTop: 20 }}
            value={signInInfo.password}
            onChangeText={handlePasswordTextChanged}
            autoCapitalize="none"
          />
        </View>

        <View style={defaultStyles.container}>
          <AppButton
            label="Sign In"
            isFilled
            isLoading={isSubmitting}
            onPress={handleSignIn}
          />
          <AppButton
            label="Create Account"
            containerStyle={{ marginTop: 20 }}
            isLoading={isSubmitting}
            onPress={handleSignUpNavigation}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },

  lightTile: {
    marginTop: 8,
    fontFamily: "outfit-regular",
    color: COLORS.gray,
    fontSize: 30,
  },
});
