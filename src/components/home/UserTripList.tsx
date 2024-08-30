import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import IMAGES from "../../constants/images";
import { headerHeight } from "../../constants/sizes";
import { formatDateMonthYear } from "../../utils/helpers";
import LatestTripItem from "./LatestTripItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/navigation-types";
import { TripPlan } from "../../utils/types";

interface Props {
  userTrips: TripPlan[];
}
export default function UserTripList({ userTrips }: Props) {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onTripPlanShowDetails = (item: TripPlan) => {
    navigation.navigate("TripDetails", { tripData: item });
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: top + headerHeight }}
      showsVerticalScrollIndicator={false}
    >
      <LatestTripItem
        item={userTrips[0]}
        onShowPlanDetails={onTripPlanShowDetails}
      />
      {userTrips.length > 1 && (
        <>
          <Text style={styles.olderPlanText}>Older Plan(s)</Text>
          <FlatList
            scrollEnabled={false}
            data={userTrips.slice(1)}
            keyExtractor={(item) => item.docId}
            renderItem={({ item }) => (
              <TripItem item={item} onItemPress={onTripPlanShowDetails} />
            )}
          />
        </>
      )}
    </ScrollView>
  );
}

const TripItem = ({
  item,
  onItemPress,
}: {
  item: TripPlan;
  onItemPress: (item: TripPlan) => void;
}) => {
  return (
    <TouchableHighlight
      style={{ borderRadius: 12 }}
      activeOpacity={0.6}
      underlayColor={COLORS.touchable_active_underlay}
      onPress={() => onItemPress(item)}
    >
      <View style={styles.itemContainer}>
        <Image
          source={
            item.userTripOption.locationInfo.photoRef
              ? {
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.userTripOption.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
                }
              : IMAGES.default_trip_thumbnail
          }
          style={styles.itemThumbnail}
        />
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.userTripOption?.locationInfo.name}
          </Text>
          <Text style={styles.itemSubTitle} numberOfLines={1}>
            {formatDateMonthYear(item.userTripOption?.startDate.toDate())}
          </Text>
          <Text style={styles.itemSubTitle} numberOfLines={1}>
            Traveler(s): {item.userTripOption?.traveler}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  olderPlanText: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 18,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    columnGap: 16,
  },
  itemThumbnail: {
    width: 78,
    height: 78,
    borderRadius: 8,
  },
  itemTitleContainer: {
    flex: 1,
    rowGap: 2,
  },
  itemTitle: {
    color: COLORS.primary,
    fontFamily: "outfit-medium",
    fontSize: 17,
  },
  itemSubTitle: {
    color: COLORS.gray,
    fontFamily: "outfit-regular",
  },
});
