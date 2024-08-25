import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import COLORS from "../../constants/colors";
import defaultStyles from "../../constants/styles";

export default function PleaseWaitTextHeader() {
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
  );
}
