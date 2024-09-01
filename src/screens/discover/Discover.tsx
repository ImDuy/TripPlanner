import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PopularList from "../../components/discover/PopularList";
import TopPlacesCarousel from "../../components/discover/TopPlacesCarousel";
import ScreenHeader from "../../components/ScreenHeader";
import COLORS from "../../constants/colors";
import { headerHeight } from "../../constants/sizes";
import defaultStyles from "../../constants/styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/navigation-types";

export default function Discover() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      style={[
        defaultStyles.screenContainer,
        { paddingTop: top, paddingBottom: 4 },
      ]}
    >
      <ScreenHeader
        headerTitle="Discover"
        headerBtnIconName="search1"
        headerBtnSize={17}
        headerBtnContainerStyle={styles.headerBtnContainerStyle}
        onHeaderBtnPress={() =>
          navigation.navigate("SearchPlaces", { activeTab: "All" })
        }
      />

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingTop: top + headerHeight }}
        showsVerticalScrollIndicator={false}
      >
        <TopPlacesCarousel />
        <PopularList
          onListHeaderBtnPress={() =>
            navigation.navigate("SearchPlaces", { activeTab: "Places" })
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBtnContainerStyle: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 80,
    padding: 8,
    marginRight: 4,
  },
});
