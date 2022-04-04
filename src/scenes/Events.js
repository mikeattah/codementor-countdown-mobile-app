import React from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import EventCard from "../components/atoms/EventCard";
import events from "../assets/events.json";

const Separator = () => <View style={styles.separator} />;

function Events({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <FlatList
            data={events}
            renderItem={({ item }) => {
              return (
                <EventCard
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
        <Separator />
        <View style={styles.buttonContainer}>
          <Button
            title="Add Event"
            onPress={() =>
              navigation.navigate("AddEvent", {
                /* params */
              })
            }
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    marginTop: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 5,
  },
  eventsContainer: {
    flex: 9,
  },
  list: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {},
});

export default Events;
