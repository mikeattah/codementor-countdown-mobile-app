import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

function TimeCard(props) {
  const { time, type } = props;
  return (
    <View style={styles.timeCard}>
      <View style={styles.timeMiniBox}>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeCard: {
    height: 40,
    width: 40,
    borderRadius: 12.5,
  },
  timeMiniBox: {},
  time: {},
  type: {},
});

export default TimeCard;
