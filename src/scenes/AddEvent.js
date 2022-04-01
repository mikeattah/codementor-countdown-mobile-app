import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import EventDetails from "./components/organisms/EventDetails.js";

const saveEvent = () => {};

function AddEvent({ route, navigation }) {
  // const { param1, param2 } = route.params;
  const [eventImage, setEventImage] = useState("");
  const [eventName, setEventName] = useState("Enter Event Name");
  const [eventDate, setEventDate] = useState("Enter Event Date");
  const [eventTime, setEventTime] = useState("Enter Event Time");
  const [eventLocation, setEventLocation] = useState("Enter Event Location");
  const [eventDescription, setEventDescription] = useState(
    "Enter Event Description"
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EventDetails
          title="Add Event Details"
          source={eventImage}
          name={eventName}
          date={eventDate}
          time={eventTime}
          location={eventLocation}
          description={eventDescription}
          leftButton="Cancel"
          rightButton="Save"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

export default AddEvent;
