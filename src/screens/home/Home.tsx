import { NavigationProp, useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../../components/home/HomeHeader";
import AddNewTripCard from "../../components/home/AddNewTripCard";
import defaultStyles from "../../constants/styles";
import { auth, db } from "../../utils/firebase-config";
import { RootStackParamList } from "../../utils/navigation-types";
import UserTripList from "../../components/home/UserTripList";
import AnimatedLoadingIcon from "../../components/AnimatedLoadingIcon";
import COLORS from "../../constants/colors";

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
      // setIsFetching(false);
    };
    fetchUserTrips();
  }, [user]);

  const handleAddBtnPress = () => {
    navigation.navigate("SearchPlace");
  };
  const renderTripList = () => {
    return userTrips.length ? (
      <UserTripList />
    ) : (
      <AddNewTripCard onAddNewTripPlan={handleAddBtnPress} />
    );
  };

  return (
    <View style={{ ...defaultStyles.screenContainer, paddingTop: top }}>
      <HomeHeader onAddNewTripPlan={handleAddBtnPress} />
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

const styles = StyleSheet.create({});
