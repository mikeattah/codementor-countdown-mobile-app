import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import EventCard from "../components/atoms/EventCard";
import data from "../assets/data.json";

function RecycleBin({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
                opacity={0.7}
                onClick={() => {}}
              />
            );
          }}
        />
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
});

export default RecycleBin;
