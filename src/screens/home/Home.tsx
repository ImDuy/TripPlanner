import { NavigationProp, useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../../components/home/HomeHeader";
import NoTripPlanView from "../../components/home/NoTripPlanView";
import defaultStyles from "../../constants/styles";
import { auth, db } from "../../utils/firebase-config";
import { RootStackParamList } from "../../utils/navigation-types";

export default function Home() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchUserTrips = async () => {
      if (!user) return;
      setIsFetching(true);
      const q = query(
        collection(db, "UserTrips"),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUserTrips([doc.data()]);
      });
      setIsFetching(false);
    };
    fetchUserTrips();
  }, [user]);

  const handleAddBtnPress = () => {
    navigation.navigate("SearchPlace");
  };
  return (
    <View style={{ ...defaultStyles.screenContainer, paddingTop: top }}>
      {/* Header */}
      <HomeHeader onAddNewTripPlan={handleAddBtnPress} />

      {/* Content */}
      <NoTripPlanView onAddNewTripPlan={handleAddBtnPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
