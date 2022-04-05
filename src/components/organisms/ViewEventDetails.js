import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import FillButton from "../atoms/FillButton";
import OutlineButton from "../atoms/OutlineButton";

const saveEvent = () => {};

function ViewEventDetails(props) {
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
        <FillButton
          text={leftButton}
          onPress={() =>
            navigation.navigate("Events", {
              /* params */
            })
          }
        />
        <OutlineButton
          text={rightButton}
          onPress={() => {
            saveEvent();
            navigation.navigate("Events", {
              /* params */
            });
          }}
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
});

export default ViewEventDetails;
