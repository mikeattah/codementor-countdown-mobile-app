import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import TimeCard from "./TimeCard";

const Card = ({ id, name, date, time, location, _, navigation, opacity }) => {
  let timeArray = time.split(":");
  let hours = timeArray[0];
  let minutes = timeArray[1];
  let seconds = timeArray[2];
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  return (
    <TouchableHighlight
      onPress={() => {
        console.log("Navigate to View Event");
        navigation.navigate("View Event", {
          /* params */
        });
      }}
      style={{ flex: 1 }}
    >
      <View style={styles.eventCard}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200" }}
          ></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.eventName}>{name}</Text>
          <Text style={styles.eventDate}>{date}</Text>
          <Text style={styles.eventTime}>{time}</Text>
          <Text style={styles.eventLocation}>{location}</Text>
        </View>
        <View style={styles.countdown}>
          <TimeCard time={date.splice(-2)} type="DAYS" />
          <TimeCard time={hours} type="HOURS" />
          <TimeCard time={minutes} type="MINUTES" />
          <TimeCard time={seconds} type="SECONDS" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    height: 100,
    flexDirection: "row",
    padding: 5,
    margin: 10,
    opacity: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "coral",
  },
  imageBox: {
    height: "100%",
    width: "20%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 25,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 25,
  },
  details: {
    height: "100%",
    width: "40%",
    paddingLeft: 10,
  },
  eventName: {},
  eventDate: {},
  eventTime: {},
  eventLocation: {},
  countdown: {
    height: "100%",
    width: "40%",
    paddingLeft: 10,
  },
});

export default Card;
