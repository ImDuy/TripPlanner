import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../../constants/colors";
import IMAGES from "../../../constants/images";
import defaultStyles from "../../../constants/styles";
import { CreateTripContext } from "../../../context/CreateTripContext";

export default function CreateTripLoading() {
  const { top } = useSafeAreaInsets();
  const { tripData } = useContext(CreateTripContext);
  const [headerDotOpacity, setHeaderDotOpacity] = useState({
    firstDot: 0,
    secondDot: 0,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (headerDotOpacity.firstDot === 0 && headerDotOpacity.secondDot === 0)
        setHeaderDotOpacity({ firstDot: 1, secondDot: 0 });
      else if (
        headerDotOpacity.firstDot === 1 &&
        headerDotOpacity.secondDot === 0
      )
        setHeaderDotOpacity({ firstDot: 1, secondDot: 1 });
      else setHeaderDotOpacity({ firstDot: 0, secondDot: 0 });
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [headerDotOpacity]);

  return (
    <View
      style={[
        defaultStyles.screenContainer,
        { paddingTop: top, alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Text style={defaultStyles.headerTitle}>
        Please Wait.
        <Text
          style={{
            color:
              headerDotOpacity.firstDot === 0 ? COLORS.white : COLORS.primary,
          }}
        >
          .
        </Text>
        <Text
          style={{
            color:
              headerDotOpacity.secondDot === 0 ? COLORS.white : COLORS.primary,
          }}
        >
          .
        </Text>
      </Text>

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
    width: 300,
    height: 300,
  },
  warnText: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    color: COLORS.gray,
    marginBottom: "25%",
  },
});
