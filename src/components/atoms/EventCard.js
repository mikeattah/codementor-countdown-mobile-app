import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

function EventCard({ navigation, ...props }) {
  return (
    <SafeAreaView>
      <TouchableHighlight
        onPress={() => {
          console.log("Navigate to ViewEventScreen");
          navigation.navigate("ViewEventScreen");
        }}
      >
        <View style={styles.eventCard}>
          <View style={styles.eventImageContainer}>
            <Image
              source={{ uri: props.image }}
              style={styles.eventImage}
            ></Image>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventName}>{props.name}</Text>
            <Text style={styles.eventDate}>Event Date</Text>
            <Text style={styles.eventTime}>Event Time</Text>
            <Text style={styles.eventLocation}>{props.location}</Text>
          </View>
          <View style={styles.eventCountdown}>
            <Text style={styles.days}>No. of Days</Text>
            <Text style={styles.hours}>No. of Hours</Text>
            <Text style={styles.mins}>No. of Mins</Text>
            <Text style={styles.secs}>No. of Secs</Text>
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: "100%",
    borderRadius: 15,
    padding: 10,
    margin: 10,
    opacity: props.opacity,
  },
  eventImageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  eventDetails: {},
  eventName: {},
  eventDate: {},
  eventTime: {},
  eventLocation: {},
  eventCountdown: {},
  days: {},
  hours: {},
  mins: {},
  secs: {},
});

export default EventCard;
