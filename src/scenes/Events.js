import React from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import EventCard from "../components/atoms/EventCard";
import data from "../assets/data.json";

const Separator = () => <View style={styles.separator} />;

function Events({ route, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.events}>
          <FlatList
            data={data}
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
          />
        </View>
        <Separator />
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 5,
  },
  events: {},
  button: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Events;
