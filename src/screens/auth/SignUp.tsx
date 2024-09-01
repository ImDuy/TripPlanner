import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../utils/navigation-types";
import defaultStyles from "../../constants/styles";
import AuthTextInput from "../../components/auth/AuthTextInput";
import AppButton from "../../components/AppButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase-config";
import Toast from "react-native-root-toast";

let toast: any;
export default function SignUp() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [signUpInfo, setSignUpInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFullNameTextChanged = (text: string) => {
    setSignUpInfo({ ...signUpInfo, fullName: text });
  };
  const handleEmailTextChanged = (text: string) => {
    setSignUpInfo({ ...signUpInfo, email: text });
  };
  const handlePasswordTextChanged = (text: string) => {
    setSignUpInfo({ ...signUpInfo, password: text });
  };
  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };
  const handleSignUp = () => {
    // check info empty?
    if (!signUpInfo.fullName || !signUpInfo.email || !signUpInfo.password) {
      if (toast) Toast.hide(toast);
      toast = Toast.show("Please enter all fields");
      return;
    }
    // sign up
    setIsSubmitting(true);
    createUserWithEmailAndPassword(auth, signUpInfo.email, signUpInfo.password)
      .then((userCredential) => {
        // Signed up
        if (toast) Toast.hide(toast);
        toast = Toast.show("Signed up successfully!");
        navigation.navigate("SignIn");
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
      <View style={styles.headerContainer}>
        <Text style={defaultStyles.headerTitle}>Create New Account</Text>
      </View>

      <View style={{ flex: 3 }}>
        <AuthTextInput
          title="Full Name"
          value={signUpInfo.fullName}
          onChangeText={handleFullNameTextChanged}
          autoCapitalize="words"
        />
        <AuthTextInput
          title="Email"
          containerStyle={{ marginTop: 20 }}
          value={signUpInfo.email}
          onChangeText={handleEmailTextChanged}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AuthTextInput
          title="Password"
          isPassword
          containerStyle={{ marginTop: 20 }}
          value={signUpInfo.password}
          onChangeText={handlePasswordTextChanged}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={{ flex: 2 }}>
        <AppButton
          label="Create Account"
          isFilled
          isLoading={isSubmitting}
          onPress={handleSignUp}
        />
        <AppButton
          label="Back to Sign In"
          containerStyle={{ marginTop: 20 }}
          isLoading={isSubmitting}
          onPress={handleSignInNavigation}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
