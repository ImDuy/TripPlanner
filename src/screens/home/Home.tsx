import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  collection,
  documentId,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedLoadingIcon from "../../components/AnimatedLoadingIcon";
import AddNewTripCard from "../../components/home/AddNewTripCard";
import UserTripList from "../../components/home/UserTripList";
import ScreenHeader from "../../components/ScreenHeader";
import COLORS from "../../constants/colors";
import defaultStyles from "../../constants/styles";
import { auth, db } from "../../utils/firebase-config";
import { RootStackParamList } from "../../utils/navigation-types";
import { TripPlan } from "../../utils/types";

export default function Home() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState<TripPlan[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, "UserTrips"),
      where("userId", "==", user.uid),
      orderBy(documentId(), "desc")
    );
    // event listener that fire when firestore data changes
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUserTrips([]);
      setIsFetching(true);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUserTrips((prevState) => [...prevState, doc.data() as TripPlan]);
      });
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleAddBtnPress = () => {
    navigation.navigate("SearchPlace");
  };
  const renderTripList = () => {
    return userTrips.length ? (
      <UserTripList userTrips={userTrips} />
    ) : (
      <AddNewTripCard onAddNewTripPlan={handleAddBtnPress} />
    );
  };

  return (
    <View
      style={{
        ...defaultStyles.screenContainer,
        paddingTop: top,
        paddingBottom: 4,
      }}
    >
      <ScreenHeader
        headerTitle="My Trips"
        headerBtnIconName="pluscircleo"
        headerBtnSize={36}
        onHeaderBtnPress={handleAddBtnPress}
      />
      {isFetching ? (
        <AnimatedLoadingIcon
          size={60}
          color={COLORS.primary}
          containerStyle={{ alignSelf: "center", marginVertical: "auto" }}
        />
      ) : (
        renderTripList()
      )}
    </View>
  );
}
