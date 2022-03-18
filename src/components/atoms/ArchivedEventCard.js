import React from "react";
import { View, Text } from "react-native";

function ExpiredEventCard({ ...props }) {
  return (
    <View>
      <Text>Thumbnail Image</Text>
      <Text>Event Name</Text>
      <Text>Countdown</Text>
    </View>
  );
}

export default ExpiredEventCard;
