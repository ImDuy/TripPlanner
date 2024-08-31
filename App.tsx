import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import RootStackNavigation from "./src/navigation/RootStackNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootSiblingParent>
            <RootStackNavigation />
          </RootSiblingParent>
        </GestureHandlerRootView>
      </NavigationContainer>
    </>
  );
}
