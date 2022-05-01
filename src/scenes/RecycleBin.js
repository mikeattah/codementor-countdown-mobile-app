import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import EventCard from "../components/atoms/EventCard";
import { recycleBin } from "../assets/data/data.json";

function RecycleBin({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={recycleBin}
          renderItem={({ item }) => {
            return (
              <EventCard
                source={item.source}
                name={item.name}
                date={item.date}
                time={item.time}
                location={item.location}
                description={item.description}
                opacity={0.7}
                onClick={() => {}}
              />
            );
          }}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
});

export default RecycleBin;
