import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function ViewEvent({ route, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EventDetails
          title="Event Details"
          source={eventImage}
          name={eventName}
          date={eventDate}
          time={eventTime}
          location={eventLocation}
          description={eventDescription}
          leftButton="Delete"
          rightButton="Edit"
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

export default ViewEvent;
