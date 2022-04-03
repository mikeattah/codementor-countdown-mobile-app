import React from "react";
import {
  Button,
  StyleSheet,
  Text,
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
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.image}>
          <Image source={source} />
        </View>
        <View style={styles.details}>
          <TouchableOpacity style={styles.text}>
            <Text>{name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text}>
            <Text>{date}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text}>
            <Text>{time}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text}>
            <Text>{location}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text}>
            <Text>{description}</Text>
          </TouchableOpacity>
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
  box: {},
  details: {},
  title: {},
  image: {},
  details: {},
  text: {},
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
