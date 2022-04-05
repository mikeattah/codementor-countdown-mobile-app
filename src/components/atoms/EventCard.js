import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

function EventCard(props) {
  const {
    id,
    source,
    name,
    date,
    time,
    location,
    description,
    navigation,
    opacity,
  } = props;

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
      <View style={styles.card}>
        <View style={styles.image}>
          <Image source={{ uri: source }}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.textOne}>{name}</Text>
          <Text style={styles.textTwo}>{date}</Text>
          <Text style={styles.textTwo}>{time}</Text>
          <Text style={styles.textTwo}>{location}</Text>
        </View>
        <View style={styles.countdown}>
          <Text style={styles.textThree}>No. of Days</Text>
          <Text style={styles.textFour}>No. of Hours</Text>
          <Text style={styles.textFour}>No. of Mins</Text>
          <Text style={styles.textFour}>No. of Secs</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 125,
    flexDirection: "row",
    padding: 5,
    margin: 10,
    opacity: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "coral",
  },
  image: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {},
  textOne: {},
  textTwo: {},
  countdown: {},
  textThree: {},
  textFour: {},
});

export default EventCard;
