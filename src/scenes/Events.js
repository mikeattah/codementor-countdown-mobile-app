import React from "react";
import {
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import EventCard from "../components/atoms/EventCard";
import events from "../assets/events.json";

const Separator = () => <View style={styles.separator} />;

function Events({ route, navigation }) {
  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <FlatList
            data={events}
            renderItem={({ item }) => {
              return (
                <EventCard
                  id={item.id}
                  source={item.source}
                  name={item.name}
                  date={item.date}
                  time={item.time}
                  location={item.location}
                  description={item.description}
                  navigation={navigation}
                  opacity={1}
                />
              );
            }}
            style={styles.list}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Add Event", {
                /* params */
              })
            }
            style={styles.button}
          >
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 1,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    height: "100%",
    width: "100%",
    marginTop: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  eventsContainer: {
    height: "90%",
    width: "100%",
  },
  list: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    height: "10%",
    width: "100%",
    margin: 0,
    paddingVertical: 0,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    padding: 0,
    backgroundColor: "coral",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "oldlace",
  },
});

export default Events;
