import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ViewEventDetails from "../components/organisms/ViewEventDetails";

function ViewEvent({ route, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ViewEventDetails
          title="Event Details"
          source={source}
          name={name}
          date={date}
          time={time}
          location={location}
          description={description}
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
