import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedScrollView from "../../../components/trip-details/AnimatedScrollView";
import DetailHeader from "../../../components/trip-details/DetailHeader";
import FlightSection from "../../../components/trip-details/FlightSection";
import HotelSection from "../../../components/trip-details/HotelSection";
import PlanSection from "../../../components/trip-details/PlanSection";
import COLORS from "../../../constants/colors";
import defaultStyles from "../../../constants/styles";
import { RootStackParamList } from "../../../utils/navigation-types";

export default function TripDetails() {
  const { bottom } = useSafeAreaInsets();
  const {
    params: { tripData },
  } = useRoute<RouteProp<RootStackParamList, "TripDetails">>();

  return (
    <View style={defaultStyles.container}>
      <AnimatedScrollView
        headerTitle={tripData.userTripOption.locationInfo.name}
        thumbnailUrl={tripData.userTripOption.locationInfo.photoRef}
        contentContainerStyle={{
          paddingBottom: bottom + 20,
        }}
      >
        <View style={[defaultStyles.screenContainer, styles.contentContainer]}>
          <DetailHeader
            locationName={tripData.userTripOption.locationInfo.name}
            startDate={tripData.userTripOption.startDate}
            endDate={tripData.userTripOption.endDate}
            travelers={tripData.userTripOption.traveler}
          />

          <FlightSection
            price={tripData.aiTripData.flight.price}
            headerStyle={styles.sectionHeader}
          />

          <HotelSection
            hotelInfo={tripData.aiTripData.hotel}
            headerStyle={styles.sectionHeader}
          />

          <PlanSection
            plan={tripData.aiTripData.itinerary}
            headerStyle={styles.sectionHeader}
          />
        </View>
      </AnimatedScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLORS.white,
    marginTop: -50,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 20,
    paddingHorizontal: 20,
    rowGap: 20,
  },
  sectionHeader: {
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 22,
  },
});
