import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function ViewEvent({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>View Event Screen</Text>
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
    height: "100%",
    width: "100%",
  },
});

export default ViewEvent;
