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
import FillButton from "../atoms/FillButton";
import OutlineButton from "../atoms/OutlineButton";

const saveEvent = () => {};

function AddOrEditEventDetails(props) {
  const {
    title,
    source,
    setSource,
    name,
    setName,
    date,
    setDate,
    time,
    setTime,
    location,
    setLocation,
    description,
    setDescription,
    navigation,
    leftButton,
    rightButton,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.image}>
          <Image
            source={{ uri: source }}
            onClick={() => setSource({ uri: "https://picsum.photos/100/100" })}
            alt={name}
          />
        </View>
        <View style={styles.details}>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
          <TextInput style={styles.input} onChangeText={setDate} value={date} />
          <TextInput style={styles.input} onChangeText={setTime} value={time} />
          <TextInput
            style={styles.input}
            onChangeText={setLocation}
            value={location}
          />
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <OutlineButton
          text={leftButton}
          onPress={() =>
            navigation.navigate("Events", {
              /* params */
            })
          }
        />
        <FillButton
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
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  box: {
    width: "100%",
  },
  title: {},
  image: {},
  details: {},
  input: {},
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default AddOrEditEventDetails;
