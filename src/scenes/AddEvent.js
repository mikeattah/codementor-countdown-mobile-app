import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const saveEvent = () => {};

function AddEvent({ route, navigation }) {
  // const { param1, param2 } = route.params;

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
        <View style={styles.details}>
          <Text>Enter Event Details</Text>
          <View>
            <Image
              style={styles.eventImage}
              source={{ uri: "https://via.placeholder.com/120.png" }}
            />
          </View>
          <View>
            <TextInput
              style={styles.eventName}
              onChangeText={setEventName}
              value={eventName}
            />
            <TextInput
              style={styles.eventDate}
              onChangeText={setEventDate}
              value={eventDate}
            />
            <TextInput
              style={styles.eventTime}
              onChangeText={setEventTime}
              value={eventTime}
            />
            <TextInput
              style={styles.eventLocation}
              onChangeText={setEventLocation}
              value={eventLocation}
            />
            <TextInput
              style={styles.eventDescription}
              onChangeText={setEventDescription}
              value={eventDescription}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Cancel"
            onPress={() =>
              navigation.navigate("Events", {
                /* params */
              })
            }
            style={styles.cancelButton}
          />
          <Button
            title="Save"
            onPress={() => {
              saveEvent();
              navigation.navigate("Events", {
                /* params */
              });
            }}
            style={styles.saveButton}
          />
        </View>
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
  details: {},
  eventImage: {},
  eventName: {},
  eventDate: {},
  eventTime: {},
  eventLocation: {},
  eventDescription: {},
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cancelButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "45%",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "coral",
  },
  saveButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "coral",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "45%",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
});

export default AddEvent;
