import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const saveEvent = () => {};

function EventDetails(props) {
  const {
    title,
    source,
    name,
    date,
    location,
    description,
    navigation,
    leftButton,
    rightButton,
  } = props;

  return (
    <View>
      <View style={styles.details}>
        <Text>{title}</Text>
        <View>
          <Image style={styles.image} source={source} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setEventName}
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEventDate}
            value={date}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEventTime}
            value={date}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEventLocation}
            value={location}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEventDescription}
            value={description}
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          title={leftButton}
          onPress={() =>
            navigation.navigate("Events", {
              /* params */
            })
          }
          style={styles.cancel}
        />
        <Button
          title={rightButton}
          onPress={() => {
            saveEvent();
            navigation.navigate("Events", {
              /* params */
            });
          }}
          style={styles.save}
        />
      </View>
    </View>
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
  image: {},
  input: {},
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cancel: {
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
  save: {
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

export default EventDetails;
