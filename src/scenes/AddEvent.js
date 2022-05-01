import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AddOrEditEventDetails from "../components/organisms/AddOrEditEventDetails.js";

const saveEvent = () => {};

function AddEvent({ route, navigation }) {
  // const { param1, param2 } = route.params;
  const [source, setSource] = useState("Click to Upload an Image");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [focus, setFocus] = useState({
    name: false,
    startDate: false,
    endDate: false,
    startTime: false,
    endTime: false,
    location: false,
    description: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <AddOrEditEventDetails
        title="Add Event Details"
        source={source}
        setSource={setSource}
        name={name}
        setName={setName}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        location={location}
        setLocation={setLocation}
        description={description}
        setDescription={setDescription}
        focus={focus}
        setFocus={setFocus}
        navigation={navigation}
        leftButton="Cancel"
        rightButton="Save"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default AddEvent;
