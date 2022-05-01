import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";

function Settings({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>General</Text>
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.links}>
            <Text style={styles.textTop}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.links}>
            <Text style={styles.textTop}>Date Format</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.links}>
            <Text style={styles.textTop}>First day of the week</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>About</Text>
          </View>
          <TouchableOpacity style={styles.links}>
            <Text style={styles.textTop}>Build Version:</Text>
            <Text style={styles.textBottom}>1.0.0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://github.com/mikeattah/events-countdown-mobile-app/issues"
              );
            }}
            style={styles.links}
          >
            <Text style={styles.textTop}>Open an issue on GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://github.com/mikeattah/events-countdown-mobile-app/issues"
              );
            }}
            style={styles.links}
          >
            <Text style={styles.textTop}>Review App on Amazon Appstore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://mikeattah.com/");
            }}
            style={styles.links}
          >
            <Text style={styles.textTop}>Author:</Text>
            <Text style={styles.textBottom}>Mike Attah</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  section: {
    width: "100%",
    paddingHorizontal: 15,
  },
  titleContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "coral",
  },
  title: {
    fontSize: 21,
    color: "coral",
  },
  links: {
    height: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "coral",
  },
  textTop: {
    fontSize: 18,
  },
  textBottom: {
    fontSize: 13,
  },
});

export default Settings;
