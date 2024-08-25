import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PleaseWaitTextHeader from "../../../components/create-trip/PleaseWaitTextHeader";
import COLORS from "../../../constants/colors";
import IMAGES from "../../../constants/images";
import { screenSize } from "../../../constants/sizes";
import defaultStyles from "../../../constants/styles";
import { CreateTripContext } from "../../../context/CreateTripContext";
import { generateAiTrip } from "../../../utils/helpers";
import { RootStackParamList } from "../../../utils/navigation-types";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase-config";

export default function CreateTrip() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { tripData } = useContext(CreateTripContext);
  const user = auth.currentUser;

  useEffect(() => {
    const loadingTripFromAI = async () => {
      if (
        tripData.locationInfo &&
        tripData.totalNumberOfDays &&
        tripData.traveler &&
        tripData.budget &&
        user
      ) {
        const tripRes = await generateAiTrip(
          tripData.locationInfo.name,
          tripData.totalNumberOfDays,
          tripData.traveler,
          tripData.budget
        );
        // store ai generated trip on firestore
        const docId = Date.now().toString();
        await setDoc(doc(db, "UserTrips", docId), {
          docId: docId,
          userId: user.uid,
          aiTripData: tripRes, // AI result
          userTripOption: tripData, // user option for trip
        });
        navigation.navigate("TabNavigation", { screen: "Home" });
      } else
        Alert.alert(
          "Error",
          "Not enough data to generate trip or User is not authenticated.",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("TabNavigation", { screen: "Home" }),
            },
          ]
        );
    };

    loadingTripFromAI();
  }, [tripData, navigation, user]);

  return (
    <View
      style={[
        defaultStyles.screenContainer,
        { paddingTop: top, alignItems: "center", justifyContent: "center" },
      ]}
    >
      <PleaseWaitTextHeader />
      <Text style={styles.subTitle}>
        We are working to generate your dream trip
      </Text>
      <Image source={IMAGES.plane_gif} style={styles.gifImg} />
      <Text style={styles.warnText}>Do Not Go Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    marginTop: 40,
    fontFamily: "outfit-medium",
    fontSize: 20,
    textAlign: "center",
    color: COLORS.primary,
  },
  gifImg: {
    objectFit: "contain",
    height: screenSize.width < 380 ? 300 : 320,
    aspectRatio: 1,
    marginVertical: 10,
  },
  warnText: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    color: COLORS.gray,
    marginBottom: "25%",
  },
});
