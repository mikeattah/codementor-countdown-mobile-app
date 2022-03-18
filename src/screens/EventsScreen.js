import React from "react";

import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import EventCard from "../components/atoms/EventCard";
import data from "../assets/data.json";

const Separator = () => <View style={styles.separator} />;

function EventsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <EventCard
                  name={item.name}
                  description={item.description}
                  date={item.date}
                  location={item.location}
                  url={item.url}
                  image={item.image}
                  navigation={navigation}
                />
              );
            }}
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
          />
        </View>
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
  },
  eventsContainer: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default EventsScreen;
