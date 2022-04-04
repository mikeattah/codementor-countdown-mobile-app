import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import AddOrEditEventDetails from "../components/organisms/AddOrEditEventDetails.js";

const saveEvent = () => {};

function AddEvent({ route, navigation }) {
  // const { param1, param2 } = route.params;
  const [source, setSource] = useState("Click to Upload an Image");
  const [name, setName] = useState("Enter Event Name");
  const [date, setDate] = useState("Enter Event Date");
  const [time, setTime] = useState("Enter Event Time");
  const [location, setLocation] = useState("Enter Event Location");
  const [description, setDescription] = useState("Enter Event Description");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AddOrEditEventDetails
          title="Add Event Details"
          source={source}
          setSource={setSource}
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          location={location}
          setLocation={setLocation}
          description={description}
          setDescription={setDescription}
          navigation={navigation}
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
