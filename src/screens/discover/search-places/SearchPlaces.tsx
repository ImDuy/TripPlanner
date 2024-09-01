import { MasonryFlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchInput from "../../../components/search-places/SearchInput";
import {
  SEARCH_ALL,
  SEARCH_HOTELS,
  SEARCH_PLACES,
} from "../../../constants/data";
import { headerHeight } from "../../../constants/sizes";
import defaultStyles from "../../../constants/styles";
import {
  DiscoverFilterOption,
  RootStackParamList,
} from "../../../utils/navigation-types";
import FilterOptions from "./FilterOptions";
import SearchPlaceCard from "./SearchPlaceCard";
import { RouteProp, useRoute } from "@react-navigation/native";

export default function SearchPlaces() {
  const { top, bottom } = useSafeAreaInsets();
  const {
    params: { activeTab },
  } = useRoute<RouteProp<RootStackParamList, "SearchPlaces">>();
  const [searchText, setSearchText] = useState("");
  const [activeOption, setActiveOption] =
    useState<DiscoverFilterOption>(activeTab);
  const data =
    activeOption === "All"
      ? SEARCH_ALL
      : activeOption === "Places"
      ? SEARCH_PLACES
      : SEARCH_HOTELS;

  const handleTextChange = (text: string) => {
    setSearchText(text);
  };
  const handleFilterOptionChange = (option: DiscoverFilterOption) => {
    setActiveOption(option);
  };
  return (
    <View
      style={[
        defaultStyles.screenContainer,
        { paddingTop: top + headerHeight },
      ]}
    >
      <SearchInput searchText={searchText} onChangeText={handleTextChange} />
      <FilterOptions
        handleOptionChange={handleFilterOptionChange}
        activeOption={activeOption}
        containerStyle={{ marginBottom: 8 }}
      />
      <MasonryFlashList
        key={activeOption} //set key here to make the list unmounted and mounted again for getting entering animation of SearchPlaceCard
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 2 + bottom }}
        estimatedItemSize={220}
        renderItem={({ item, index }) => (
          <SearchPlaceCard item={item} index={index} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}
