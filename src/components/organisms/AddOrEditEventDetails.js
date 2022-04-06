import React from "react";
import {
  ScrollView,
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
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    location,
    setLocation,
    description,
    setDescription,
    focus,
    setFocus,
    navigation,
    leftButton,
    rightButton,
  } = props;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      bounces={true}
      keyboardDismissMode="on-drag"
    >
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
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>Event Name:</Text>
            <TextInput
              onFocus={() => setFocus({ name: true })}
              onBlur={() => setFocus({ name: false })}
              style={[styles.textInput, focus.name ? styles.focused : null]}
              onChangeText={setName}
              value={name}
              placeholder="Burning Man Festival"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>Start Date:</Text>
            <TextInput
              onFocus={() => setFocus({ startDate: true })}
              onBlur={() => setFocus({ startDate: false })}
              style={[
                styles.textInput,
                focus.startDate ? styles.focused : null,
              ]}
              onChangeText={setStartDate}
              value={startDate}
              placeholder={new Date().toLocaleDateString()}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>End Date:</Text>
            <TextInput
              onFocus={() => setFocus({ endDate: true })}
              onBlur={() => setFocus({ endDate: false })}
              style={[styles.textInput, focus.endDate ? styles.focused : null]}
              onChangeText={setEndDate}
              value={endDate}
              placeholder={new Date().toLocaleDateString()}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>Start Time (Daily):</Text>
            <TextInput
              onFocus={() => setFocus({ startTime: true })}
              onBlur={() => setFocus({ startTime: false })}
              style={[
                styles.textInput,
                focus.startTime ? styles.focused : null,
              ]}
              onChangeText={setStartTime}
              value={startTime}
              placeholder={new Date().toLocaleTimeString()}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>End Time (Daily):</Text>
            <TextInput
              onFocus={() => setFocus({ endTime: true })}
              onBlur={() => setFocus({ endTime: false })}
              style={[styles.textInput, focus.endTime ? styles.focused : null]}
              onChangeText={setEndTime}
              value={endTime}
              placeholder={new Date().toLocaleTimeString()}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>Event Location:</Text>
            <TextInput
              onFocus={() => setFocus({ location: true })}
              onBlur={() => setFocus({ location: false })}
              style={[styles.textInput, focus.location ? styles.focused : null]}
              onChangeText={setLocation}
              value={location}
              placeholder="San Francisco, CA"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.desc}>Event Description:</Text>
            <TextInput
              onFocus={() => setFocus({ description: true })}
              onBlur={() => setFocus({ description: false })}
              style={[
                styles.textArea,
                focus.description ? styles.focused : null,
              ]}
              onChangeText={setDescription}
              value={description}
              multiline={true}
              textAlignVertical="top"
              placeholder="Drinking, dancing and partying at Burning Man"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <OutlineButton
          text={leftButton}
          onPress={() => {
            console.log(leftButton);
            navigation.navigate("Events", {
              /* params */
            });
          }}
        />
        <FillButton
          text={rightButton}
          onPress={() => {
            console.log(rightButton);
            saveEvent();
            navigation.navigate("Events", {
              /* params */
            });
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  box: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "coral",
  },
  image: {},
  details: {},
  inputContainer: {
    marginVertical: 10,
  },
  desc: {
    color: "coral",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: "coral",
    borderRadius: 15,
    padding: 15,
    height: 50,
  },
  focused: {
    borderWidth: 1,
  },
  textArea: {
    borderWidth: 0.5,
    borderColor: "coral",
    borderRadius: 15,
    padding: 15,
    height: 200,
  },
  buttons: {
    width: "100%",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default AddOrEditEventDetails;
